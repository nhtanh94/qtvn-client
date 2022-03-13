import { Injectable, Injector } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
  HttpResponseBase,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, mergeMap, retry, tap } from 'rxjs/operators';
import { HttpCacheService } from './cache/http-cache.service';

@Injectable({
  providedIn: 'root',
})
export class DefaultInterceptor implements HttpInterceptor {
  constructor(
    private injector: Injector,
    private router: Router,
    private cacheService: HttpCacheService
  ) {}

  private checkStatus(ev: HttpResponseBase): void {
    if ((ev.status >= 200 && ev.status < 300) || ev.status === 401) {
      return;
    }
  }

  private goTo(url: string): void {
    setTimeout(() => this.injector.get(Router).navigateByUrl(url));
  }

  private handleData(
    ev: HttpResponseBase,
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<any> {
    this.checkStatus(ev);
    // Business processing: some common operations
    switch (ev.status) {
      case 0:
        this.onlineCheck();
        break;
      case 200:
        break;
      case 401:
        this.toLogin();
        break;
      case 403:
      case 404:
      case 500:
        this.goToErrorPage(`/error/500`, true);
        break;
      case 502:
        this.goToErrorPage(`/error/503`, true);
        break;
      case 503:
        this.goToErrorPage(`/error/503`, true);
        break;
      default:
        if (ev instanceof HttpErrorResponse) {
          console.warn(
            'Unknown errors, mostly caused by the backend does not support cross-domain CORS or invalid configuration, Status: ' +
              ev.status,
            ev
          );
        }
        break;
    }
    if (ev instanceof HttpErrorResponse) {
      return throwError(ev);
    } else {
      return of(ev);
    }
  }

  toLogin(): void {
    this.router.navigate(['/user/login']);
  }

  goToErrorPage(url: string, skipLocationChange = false): void {
    if (skipLocationChange) this.router.navigate([url], { skipLocationChange });
    else this.router.navigate([url]);
  }

  onlineCheck(): void {
    let isOnline = true;
    let xhr = new XMLHttpRequest();
    //TODO : Change order URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = () => {
      if (xhr.status == 200 && xhr.status < 300) {
        isOnline = true;
      } else {
        isOnline = false;
        this.goToErrorPage('/error/no-internet', true);
      }
    };
    xhr.onerror = () => {
      isOnline = false;
      this.goToErrorPage('/error/no-internet', true);
    };
    xhr.send(); //sending get request to the passed url
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const ob = localStorage.getItem('_tk_hco_bk');
    let token;
    if (ob) {
      const user = JSON.parse(ob);
      token = user.access_token;
    }

    let modReq: any;
    if (token) {
      const authHeader = 'Bearer ' + token;
      const updUrl = {
        url: req.url,
        headers: req.headers.set('Authorization', authHeader),
      };
      modReq = req.clone(updUrl);
    } else {
      const url = { url: req.url };
      modReq = req.clone(url);
    }

    // attempt to retrieve a cached response
    const cachedResponse: HttpResponse<any> | undefined = this.cacheService.get(
      req.url
    );

    // it sets the cache param in the params before making the request.
    const urlWithParams = req.urlWithParams;
    if (urlWithParams.indexOf('?cache=true') !== -1) {
      if (cachedResponse) {
        return of(cachedResponse);
      }
    }

    return next.handle(modReq).pipe(
      mergeMap((ev) => {
        // Allow unified handling of request errors
        if (ev instanceof HttpResponseBase) {
          return this.handleData(ev, modReq, next);
        }
        // If everything is normal, follow up operations
        return of(ev);
      }),
      tap((event) => {
        if (event instanceof HttpResponse) {
          // console.log(`Adding item to cache: ${modReq.url}`);
          this.cacheService.put(req.url, event);
        }
      }),
      catchError((err: HttpErrorResponse) => this.handleData(err, modReq, next))
    );
  }
}

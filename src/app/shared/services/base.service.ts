import { HttpParams } from '@angular/common/http';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { catchError, map, of, startWith } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { HandleError } from 'src/app/core/abstracts/handle-error.abstracts';
import { IGeneralResponse } from 'src/app/core/abstracts/iGeneralResponse.interface';
import { IResponse } from 'src/app/core/abstracts/iResponse.interface';
import { IResponseV4 } from 'src/app/core/abstracts/iResponseV4.interface';
type Obs = Observable<IGeneralResponse>;

export abstract class BaseService<
  TViewModel,
  TFilterModel,
  TModel
> extends HandleError<any> {
  constructor(
    protected httpClient: TransferHttpService,
    protected urlName: string,
    protected apiName: string // protected msg: NotificationService
  ) {
    super();
    // msg
  }

  getCustomApi(
    apiMethod: string,
    params: HttpParams,
    cache: boolean = false
  ): Obs {
    let requestURL = ``;
    if (apiMethod !== '') {
      requestURL = `${this.urlName}/${this.apiName}/${apiMethod}`;
    } else {
      requestURL = `${this.urlName}/${this.apiName}`;
    }
    if (cache === true) {
      requestURL += `&cache=true`;
    }
    return this.httpClient
      .get<IResponse<TViewModel> | IResponseV4<TViewModel>>(requestURL, {
        params,
      })
      .pipe(
        map((data) => ({
          isLoading: false,
          data,
          error: '',
        })),
        startWith({
          isLoading: true,
          data: null,
          error: '',
        }),
        catchError((err) =>
          of({
            isLoading: false,
            data: null,
            error: err.message,
          })
        )
      );
  }

  postCustomApi(
    apiMethod: string,
    model: TModel,
    params?: HttpParams,
    cache: boolean = false
  ): Obs {
    let requestURL = ``;
    if (apiMethod !== '') {
      requestURL = `${this.urlName}/${this.apiName}/${apiMethod}`;
    } else {
      requestURL = `${this.urlName}/${this.apiName}`;
    }
    if (cache === true) {
      requestURL += `&cache=true`;
    }
    return this.httpClient
      .post<IResponse<TViewModel> | IResponseV4<TViewModel>>(
        requestURL,
        model,
        {
          params,
        }
      )
      .pipe(
        map((data) => ({
          isLoading: false,
          data,
          error: '',
        })),
        startWith({
          isLoading: true,
          data: null,
          error: '',
        }),
        catchError((err) =>
          of({
            isLoading: false,
            data: null,
            error: err.message,
          })
        )
      );
  }

  putCustomApi(apiMethod: string, model: TModel, cache: boolean = false): Obs {
    let requestURL = ``;
    if (apiMethod !== '') {
      requestURL = `${this.urlName}/${this.apiName}/${apiMethod}`;
    } else {
      requestURL = `${this.urlName}/${this.apiName}`;
    }
    if (cache === true) {
      requestURL += `&cache=true`;
    }
    return this.httpClient
      .put<IResponse<TViewModel> | IResponseV4<TViewModel>>(requestURL, model)
      .pipe(
        map((data) => ({
          isLoading: false,
          data,
          error: '',
        })),
        startWith({
          isLoading: true,
          data: null,
          error: '',
        }),
        catchError((err) =>
          of({
            isLoading: false,
            data: null,
            error: err.message,
          })
        )
      );
  }

  patchCustomApi(
    apiMethod: string,
    model: TModel,
    cache: boolean = false
  ): Obs {
    let requestURL = ``;
    if (apiMethod !== '') {
      requestURL = `${this.urlName}/${this.apiName}/${apiMethod}`;
    } else {
      requestURL = `${this.urlName}/${this.apiName}`;
    }
    if (cache === true) {
      requestURL += `&cache=true`;
    }
    return this.httpClient
      .patch<IResponse<TViewModel> | IResponseV4<TViewModel>>(requestURL, model)
      .pipe(
        map((data) => ({
          isLoading: false,
          data,
          error: '',
        })),
        startWith({
          isLoading: true,
          data: null,
          error: '',
        }),
        catchError((err) =>
          of({
            isLoading: false,
            data: null,
            error: err.message,
          })
        )
      );
  }

  deleteCustomApi(
    apiMethod: string,
    params: HttpParams,
    cache: boolean = false
  ): Obs {
    let requestURL = ``;
    if (apiMethod !== '') {
      requestURL = `${this.urlName}/${this.apiName}/${apiMethod}`;
    } else {
      requestURL = `${this.urlName}/${this.apiName}`;
    }
    if (cache === true) {
      requestURL += `&cache=true`;
    }
    return this.httpClient
      .delete<IResponse<TViewModel> | IResponseV4<TViewModel>>(requestURL, {
        params,
      })
      .pipe(
        map((data) => ({
          isLoading: false,
          data,
          error: '',
        })),
        startWith({
          isLoading: true,
          data: null,
          error: '',
        }),
        catchError((err) =>
          of({
            isLoading: false,
            data: null,
            error: err.message,
          })
        )
      );
  }
}

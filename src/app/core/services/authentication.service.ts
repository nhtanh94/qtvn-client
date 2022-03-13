import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Router } from '@angular/router';
import { CreateUserReq } from '../models/model/userReq';
import { User } from '../models/model/user';
import { UpdateUserRequest } from '../models/model/updateUserRequest';
import { LoggerService } from 'src/app/shared/services/logger.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip, compress, br',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: TransferHttpService, private router: Router) {}
  baseUrl = '';
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      LoggerService.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getCurrentUser() {
    return localStorage.getItem('_tk_hco_bk');
  }

  isLoggedIn() {
    return this.getCurrentUser() !== null;
  }

  clearOauth() {
    localStorage.clear();
  }

  isOwner() {
    const currentRole = localStorage.getItem('role');
    if (currentRole === 'owner') {
      return true;
    } else {
      return false;
    }
  }

  isHospital() {
    const currentRole = localStorage.getItem('role');
    if (currentRole === 'hospital') {
      return true;
    } else {
      return false;
    }
  }

  getToken(username: string, password: string): Observable<any> {
    const body = { username: username, password: password };
    return this.http
      .post(this.baseUrl + 'token', body, httpOptions)
      .pipe(
        catchError(this.handleError('Error on get token with body ', body))
      );
  }

  exchangeRefreshToken(refreshToken: string): Observable<any> {
    const body = { refresh_token: refreshToken };
    return this.http
      .post(this.baseUrl + 'refreshToken', body, httpOptions)
      .pipe(
        catchError(this.handleError('Error on get token with body ', body))
      );
  }

  createUser(bodyReq: CreateUserReq): Observable<any> {
    return this.http.post(this.baseUrl + 'users', bodyReq, httpOptions);
  }

  getInfoUserAuthen(): Observable<User> {
    const url = `${this.baseUrl}` + 'user';
    return this.http.get(url).pipe(
      map((data: any) => {
        return data;
      })
    );
  }
  updateUser(bodyReq: UpdateUserRequest): Observable<any> {
    return this.http
      .put(this.baseUrl + 'users', bodyReq, httpOptions)
      .pipe(catchError(this.handleError('Error on update user ', bodyReq)));
  }

  loginWithSocialLogin(
    providerName: string,
    accessToken: string
  ): Observable<any> {
    const bodyReq = {
      providerName: providerName,
      providerAccessToken: accessToken,
    };

    return this.http.post(this.baseUrl + 'users/exchangeToken', bodyReq);
  }
  sendSmsOTP(phone: string, deviceId: string): Observable<any> {
    const newHttpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-DEVICE-ID': deviceId,
      }),
    };
    return this.http.post(
      this.baseUrl + 'v4/auth/otp/send',
      { phoneNumber: phone },
      newHttpOptions
    );
  }
  loginWithOTP(body: any): Observable<any> {
    return this.http.post(this.baseUrl + 'v4/auth/otp/verify', body);
  }

  removeLocalStorage() {
    localStorage.removeItem('_tk_hco_bk');
    localStorage.removeItem('_in_hco_bk');
    localStorage.removeItem('role');
    this.router.navigate(['/']);
  }

  logout() {
    this.removeLocalStorage();
    return this.http.post(
      this.baseUrl + 'v4/users/logout',
      {
        fbRegistrationId: '',
        oneSignalUserId: '',
      },
      httpOptions
    );
  }
  isLogin() {
    return localStorage.getItem('_tk_hco_bk') !== null;
  }
}

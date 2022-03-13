import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { IResponseV4 } from '../abstracts/iResponseV4.interface';
import { CurrentUserVm } from '../models/view-model/current-user.model';
type ViewModels = CurrentUserVm | any;

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService<ViewModels, any, any> {
  constructor(
    protected http: TransferHttpService // protected msg: NotificationService
  ) {
    super(http, environment.apiUrl, 'v1/auth');
  }

  // Method GET
  loginWithPassword(
    email: string,
    password: string
  ): Observable<IResponseV4<CurrentUserVm>> {
    const body = { email, password };
    const obs = super.postCustomApi('', body);
    return obs;
  }

  // Method POST
  sendOTP(phoneNumber: any): Observable<any> {
    const url = `otp/send`;
    return super.postCustomApi(url, { phoneNumber });
  }

  checkAndSend(phoneNumber: any): Observable<any> {
    const url = `login/check-and-send`;
    return super.postCustomApi(url, { phoneNumber });
  }

  verifyOtp(sessionInfo: any, otp: any): Observable<any> {
    const body = {
      sessionInfo,
      otp,
    };
    const url = `otp/verify`;
    return super.postCustomApi(url, body);
  }

  verifyOtpCheckAndSend(
    sessionInfo: any,
    otp: any,
    action: any
  ): Observable<any> {
    const body = {
      sessionInfo,
      otp,
      action,
    };
    const url = `login/check-and-send/verify`;
    return super.postCustomApi(url, body);
  }

  createPassword(
    sessionInfo: any,
    password: any,
    retypePassword: any
  ): Observable<any> {
    const body = {
      sessionInfo,
      password,
      retypePassword,
    };
    const url = `login/password/create`;
    return super.postCustomApi(url, body);
  }

  resetPassword(
    sessionInfo: any,
    password: any,
    retypePassword: any
  ): Observable<any> {
    const body = {
      sessionInfo,
      password,
      retypePassword,
    };
    const url = `login/password/reset`;
    return super.postCustomApi(url, body);
  }

  changePassword(
    currentPassword: any,
    newPassword: any,
    retypeNewPassword: any
  ): Observable<any> {
    const body = {
      currentPassword,
      newPassword,
      retypeNewPassword,
    };
    const url = `login/password/change`;
    return super.postCustomApi(url, body);
  }

  // Method PATCH

  // Method PUT

  // Method DELETE
}

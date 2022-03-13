import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { IResponseV4 } from '../abstracts/iResponseV4.interface';

@Injectable({
  providedIn: 'root',
})
export class UserV4Service extends BaseService<any, any, any> {
  constructor(
    protected http: TransferHttpService // protected msg: NotificationService
  ) {
    super(http, environment.apiUrl, 'v4/users');
  }

  // Method GET
  getInfo(): Observable<IResponseV4<any>> {
    return super.getCustomApi('info', new HttpParams());
  }

  getEnableConfigHospitalV4(id: any): Observable<IResponseV4<any>> {
    const requestURL = environment.apiUrl + `hospitals/${id}/enabled-configs`;
    return super.getCustomApi(requestURL, new HttpParams());
  }

  // Method POST

  // Method PATCH
  updateUserInfo(user: any): Observable<IResponseV4<any>> {
    return this.patchCustomApi('info', user);
  }

  // Method PUT

  // Method DELETE
}

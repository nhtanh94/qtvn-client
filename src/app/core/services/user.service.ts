import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { IResponse } from '../abstracts/iResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<any, any, any> {
  constructor(
    protected http: TransferHttpService // protected msg: NotificationService
  ) {
    super(http, environment.apiUrl, 'user');
  }

  getUser(): Observable<IResponse<any>> {
    return super.getCustomApi('', new HttpParams());
  }

  getCurrentUserId(): any {
    const ob = localStorage.getItem('_in_hco_bk');
    if (ob) {
      const user = JSON.parse(ob);
      if (user) {
        return user.id;
      }
    }
    return;
  }

  getCurrentUser(): any {
    const ob = localStorage.getItem('_in_hco_bk');
    let token;
    if (ob) {
      const user = JSON.parse(ob);
      if (user) {
        return user;
      }
    }
    return;
  }

  getPrimaryPatient(): any {
    const ob = localStorage.getItem('_in_hco_bk');
    let primaryPatient: any = new Object();
    if (ob) {
      const p = JSON.parse(ob);
      if (primaryPatient) {
        primaryPatient.primaryPatientId = p?.primaryPatientId;
        primaryPatient.primaryPatientName = p?.name;
        primaryPatient.percentInfoCompleted = p.percentInfoCompleted;
        return primaryPatient;
      }
    }
    return;
  }
  // Method POST

  // Method PATCH

  // Method PUT
}

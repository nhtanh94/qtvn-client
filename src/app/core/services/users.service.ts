import { Injectable } from '@angular/core';
import { TransferHttpService } from '@gorniv/ngx-transfer-http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/shared/services/base.service';
import { environment } from 'src/environments/environment';
import { IResponse } from '../abstracts/iResponse.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService<any, any, any> {
  constructor(protected http: TransferHttpService) {
    super(http, environment.apiUrl, 'users');
  }

  // Method GET
  getToken(username: string, password: string): Observable<IResponse<any>> {
    const body = { username, password };
    const obs = super.postCustomApi('token', body);
    return obs;
  }

  // Method POST

  // Method PATCH

  // Method PUT

  // Method DELETE
}

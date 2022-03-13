import { IGeneralResponse } from './iGeneralResponse.interface';
import { ISimpleResponseV4 } from './iSimpleResponseV4.interface';

export interface IResponseV4<T> extends IGeneralResponse {
  data: ISimpleResponseV4<T>;
}

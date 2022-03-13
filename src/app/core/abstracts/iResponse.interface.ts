import { IGeneralResponse } from './iGeneralResponse.interface';
import { ISimpleResponse } from './iSimpleResponse.interface';

export interface IResponse<T> extends IGeneralResponse {
  data: ISimpleResponse<T>;
}

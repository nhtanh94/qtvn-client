import { IResponseV4 } from './iResponseV4.interface';

export interface IHandleError<T> {
  // Error message by Api or Client
  isValidResponse(x: any | [x: any, clientMsg?: any]): boolean;
  isValidResponseV4(
    x: IResponseV4<T> | [x: IResponseV4<T>, clientMsg?: any]
  ): void;
}

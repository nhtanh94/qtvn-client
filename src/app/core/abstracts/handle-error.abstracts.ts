import { IHandleError } from './iHandleError.interface';
import { IResponseV4 } from './iResponseV4.interface';

export abstract class HandleError<T> implements IHandleError<any> {
  constructor() {} // protected msg: NotificationService

  isValidResponse(x: any, clientMsg?: string): boolean {
    if (!x.succeeded) {
      if (clientMsg) {
        // this.msg.error(clientMsg, 'Lỗi!!!');
        return x.succeeded;
      }

      if (x.params) {
        // this.msg.error(x?.params?.message ?? 'Đã có lỗi xảy ra', 'Lỗi!!!');
      } else if (x.error) {
        // this.msg.error(x?.params?.message ?? 'Đã có lỗi xảy ra', 'Lỗi!!!');
      } else {
        // this.msg.error(x.params.message ?? 'Đã có lỗi xảy ra', 'Lỗi!!!');
      }
    }
    return x.succeeded;
  }

  isValidResponseV4(x: IResponseV4<T>, clientMsg?: string): boolean {
    if (!x.data?.succeeded) {
      if (clientMsg) {
        // this.msg.error(clientMsg, 'Lỗi!!!');
        return x.data?.succeeded;
      }

      if (x.data?.error) {
        // this.msg.error(x?.error?.message ?? 'Đã có lỗi xảy ra', 'Lỗi!!!');
      } else {
        // this.msg.error('Đã có lỗi xảy ra', 'Lỗi!!!');
      }
    }
    return x.data?.succeeded;
  }
}

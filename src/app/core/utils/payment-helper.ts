import { PaymentGatewayEnum } from '../enums/paymentGateway.enum';
import { TimeSlotPaymentTypeEnum } from '../enums/timeSlotPaymentType.enum';

export class PaymentUtil {
  static isShowMomo(item: any, typeMedicalService?: any): boolean {
    if (typeMedicalService === 'APPOINTMENT') {
      if (
        item.dataBooking &&
        item.config &&
        item.dataBooking?.paymentType === TimeSlotPaymentTypeEnum.PAYMENT
      ) {
        if (
          item.config?.paymentPlatformTypes?.includes(PaymentGatewayEnum.MOMO)
        ) {
          return true;
        }
        return false;
      }
    } else {
      if (
        item.config?.paymentPlatformTypes?.includes(PaymentGatewayEnum.MOMO)
      ) {
        return true;
      }
      return false;
    }
    return false;
  }

  static isShowPayoo(item: any, typeMedicalService?: any): boolean {
    if (typeMedicalService === 'APPOINTMENT') {
      if (
        item.dataBooking &&
        item.config &&
        item.dataBooking?.paymentType === TimeSlotPaymentTypeEnum.PAYMENT
      ) {
        if (
          item.config?.paymentPlatformTypes?.includes(PaymentGatewayEnum.PAYOO)
        ) {
          return true;
        }
        return false;
      }
    } else {
      if (
        item.config?.paymentPlatformTypes?.includes(PaymentGatewayEnum.PAYOO)
      ) {
        return true;
      }
      return false;
    }
    return false;
  }

  static isShowSMS(item: any, typeMedicalService?: any): boolean {
    if (typeMedicalService === 'APPOINTMENT') {
      if (
        item.dataBooking &&
        item.config &&
        item.dataBooking?.paymentType === TimeSlotPaymentTypeEnum.SMS
      ) {
        return true;
      }
    } else {
      // TODO: thanh toan CLS, thanh toan vien phi chua ho tro thanh toan SMS
      // if (item.config?.paymentPlatformTypes?.includes(PaymentGatewayEnum.SMS)) {
      //   return true;
      // }
      return false;
    }
    return false;
  }
}

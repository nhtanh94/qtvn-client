import { AbstractControl } from '@angular/forms';

/**
 * Check type Number
 * @param number: string | number
 */
export class NumberUtil {
  static isNumber(value: string | number): boolean {
    return value != null && !isNaN(Number(value.toString()));
  }
  static numberWithCommas(x: string | number) {
    if (!x && x !== 0) {
      return '';
    }
    if (typeof x === 'string') {
      x = parseInt(x, 10);
    }
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  transformMoney(
    value: any,
    input: any,
    formControl: AbstractControl,
    currencyPipe: any
  ) {
    try {
      if (!value) {
        formControl.setValue(0);
        input.value = '';
      }
      const fee = (
        currencyPipe.transform(
          value.toString().replace(/[,]/g, '').replace('₫', ''),
          'VND'
        ) as any
      ).split('₫')[1];
      formControl ? formControl.setValue(Number(fee.replace(/[,]/g, ''))) : '';
      input.value = fee;
    } catch (error) {
      input.value =
        formControl && formControl.value
          ? NumberUtil.numberWithCommas(formControl.value)
          : '';
    }
  }

  static formatNumber(num: any) {
    if (num) {
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
    return num;
  }
}

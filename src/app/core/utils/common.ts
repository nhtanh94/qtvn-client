import { Base64 } from './base64';
// import * as moment from 'moment';
export const DATA_TYPE = 'APPOINTMENT_DATE';
export class Common {
  static get randomId(): string {
    const s4 = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };

    return (
      s4() +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      '-' +
      s4() +
      s4() +
      s4()
    );
  }

  static get isClient() {
    return window !== undefined;
  }

  static toCamelCase(str: string): string {
    str = str.replace(/[_ ](.)/g, (match, p1) => p1.toUpperCase());
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  static jsUcfirst(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static object2Base64(data: Object) {
    const jsonData = JSON.stringify(data);
    return Base64.encode(jsonData);
  }

  static base642Object(base64: string) {
    const jsonData = Base64.decode(base64);
    return JSON.parse(jsonData);
  }

  static generateArrayEntity(arr: Array<any>, entityType: any) {
    if (!arr || !arr.length) {
      return null;
    }

    const result = [];

    for (const item of arr) {
      const entity = new entityType(item);
      result.push(entity);
    }

    return result;
  }

  public static isObjectNullOrEmpty(value: any): boolean {
    if (value == null || value == undefined) {
      return true;
    }
    if (
      this.checkIfArrayIsEmpty(value) ||
      this.checkIfNumberIsEmpty(value) ||
      this.checkIfObjectIsEmpty(value) ||
      this.checkIfStringIsEmpty(value)
    ) {
      return true;
    } else if (!value) {
      return true;
    }
    return false;
  }

  // public static formatMonthClient(time: any) {
  //   const format = moment(time, 'DD-MM-YYYY');
  //   return format.format('MM');
  // }

  // public static formatDayClient(time: any) {
  //   const format = moment(time, 'DD-MM-YYYY');
  //   return format.format('DD');
  // }

  // public static formatYearClient(time: any) {
  //   const format = moment(time, 'DD-MM-YYYY');
  //   return format.format('YYYY');
  // }

  private static checkIfArrayIsEmpty(value: any) {
    return value.prop && value.prop.constructor === Array && value.length === 0;
  }

  private static checkIfNumberIsEmpty(value: any) {
    return typeof value === 'number' && value === 0;
  }

  private static checkIfObjectIsEmpty(value: any) {
    return (
      typeof value === 'object' &&
      Object.keys(value).length === 0 &&
      value.constructor === Object
    );
  }

  private static checkIfStringIsEmpty(value: any) {
    return typeof value === 'string' && value.length === 0;
  }

  static isObjEmpty(obj: any) {
    return Object.keys(obj).length === 0;
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

  // static formatTimeServer(date: any) {
  //   return moment(
  //     `${date.day}-${date.month}-${date.year}`,
  //     'DD-MM-YYYY'
  //   ).format('YYYY-MM-DD');
  // }

  // static formatTimeClient(date: any) {
  //   if (date) {
  //     return moment(
  //       `${date.day}-${date.month}-${date.year}`,
  //       'DD-MM-YYYY'
  //     ).format('DD/MM/YYYY');
  //   }
  //   return '';
  // }

  // static formatStringTimeClient(date: string) {
  //   if (date) {
  //     return moment(date, 'DD-MM-YYYY').format('DD/MM/YYYY');
  //   }
  //   return '';
  // }

  // static isValidPeriodTime(start: any, end: any) {
  //   if (moment(end).diff(moment(start), 'days') < 0) {
  //     return true;
  //   }

  //   return false;
  // }

  // static formatTimeStringClient(date: string) {
  //   return moment(date).format('DD/MM/YYYY');
  // }

  static showFee(flowEnable: any, feeEnable: boolean) {
    if (flowEnable && feeEnable) {
      return true;
    }
    return false;
  }

  static hexToRgb(hex: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
}

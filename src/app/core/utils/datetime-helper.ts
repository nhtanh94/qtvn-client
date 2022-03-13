import { DatePipe } from '@angular/common';
import { addDays, addWeeks, format, getDay, startOfYear } from 'date-fns';
export class DateTimeUtil {
  static formatToISODate(date: any, formatD: string): any {
    const datePipe = new DatePipe('en-US');
    const myOutDate: string | null = datePipe.transform(date, formatD);
    return myOutDate;
  }

  static formatDate(value: Date): any {
    if (value) {
      const date = new Date(value);
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' ' +
        date.getHours() +
        ':' +
        date.getMinutes()
      );
    }
    return value;
  }

  static formatISODate(date: any) {
    if (!date) {
      return '';
    }
    return format(date, 'yyyy-MM-dd');
  }

  static formatLocalDate(date: any) {
    if (!date) {
      return '';
    }
    return format(date, 'dd-MM-yyyy');
  }

  static formatLocalToISO(date: string): any {
    return date.split('-').reverse().join('-');
  }

  static formatStringTimeClient(date: string): any {
    if (date) {
      return format(new Date(date), 'dd/MM/yyyy');
    }
    return;
  }

  static formatToString(time: any, formatTo: string): string | null {
    if (time) {
      return format(new Date(time), formatTo);
    }
    return null;
  }

  public static formatMonthClient(time: any) {
    const _format = format(time, 'MM');
    return _format;
  }

  public static formatDayClient(time: any) {
    const _format = format(time, 'dd');
    return _format;
  }

  public static formatYearClient(time: any) {
    const _format = format(time, 'yyyy');
    return _format;
  }

  public static formatBirthDay(obj: any) {
    const day = !isNaN(obj.day) ? obj.day : '';
    const month = !isNaN(obj.month) ? obj.month : '';
    const yeard = !isNaN(obj.yeard) ? obj.yeard : '';

    if (!day && !month && !yeard) {
      return '';
    } else if (!day && !month) {
      return `${yeard}`;
    } else if (day < 10 && month < 10) {
      return `0${day}/0${month}/${yeard}`;
    } else if (day < 10) {
      return `0${day}/${month}/${yeard}`;
    } else if (month < 10) {
      return `${day}/0${month}/${yeard}`;
    }
    return `${day}/${month}/${yeard}`;
  }

  static formatHourMinute(value: Date): any {
    if (value) {
      const date = new Date(value);
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      return hour + ':' + minute;
    }
    return value;
  }
  // HH:mm => dd/MM/yyyy HH:mm
  static convertTimetoDate(time: string) {
    const splitTime = String(time).match(/^(\d+):(\d+)$/);
    if (!time || !splitTime) {
      return new Date('01/01/1970 00:00');
    }
    const hour = splitTime[1];
    const minute = splitTime[2];
    return new Date(`01/01/1970 ${hour}:${minute}`);
  }

  static hourMinuteToObject(value: any): any {
    let obj;
    if (value) {
      const date = new Date(value);
      const hour = date.getHours().toString().padStart(2, '0');
      const minute = date.getMinutes().toString().padStart(2, '0');
      obj = { hour, minute };
    }
    return obj;
  }

  static subtractHHMMToMinute(start: string, end: string): number {
    const arrStart = start?.split(':');
    const hourStart = +arrStart[0];
    const minuteStart = +arrStart[1];
    const countMinutesStart = hourStart * 60 + minuteStart;
    const arrEnd = end?.split(':');
    const hourEnd = +arrEnd[0];
    const minuteEnd = +arrEnd[1];
    const countMinutesEnd = hourEnd * 60 + minuteEnd;
    return countMinutesEnd - countMinutesStart ?? 0;
  }

  static subtractDateTimeToMinute(start: any, end: any): number {
    const startDate = new Date(start);
    const hourStart = startDate.getHours();
    const minuteStart = startDate.getMinutes();
    const countMinutesStart = hourStart * 60 + minuteStart;
    const endDate = new Date(end);
    const hourEnd = endDate.getHours();
    const minuteEnd = endDate.getMinutes();
    const countMinutesEnd = hourEnd * 60 + minuteEnd;
    return countMinutesEnd - countMinutesStart ?? 0;
  }

  static getDateFromWeekYear(w: any, y: any, d: any) {
    let startDayOfYear = startOfYear(new Date(y, 0, 1));
    let diff = d - getDay(startDayOfYear);
    let firstAppearanceOfYear = addDays(
      startDayOfYear,
      diff < 0 ? 7 + diff : diff
    );
    return addWeeks(firstAppearanceOfYear, w - 1);
  }
}

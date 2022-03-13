// import * as moment from 'moment';

const monthArrays: string[] = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];
export interface DateRangeFilter {
  startDate: string;
  endDate: string;
}

export class DateUtils {
  /**
   * Get range of date
   * For example: with given date 01/19/2019
   * response will be
   * startDate: 2018-12-19
   * endDate: 2019-02-19
   * This is needed and it can cover for all of 3 calendar views: "Tháng, "Tuần", "Ngày"
   * @param date
   */
  static getDateRangeForFilterFromGiven(date: Date): DateRangeFilter {
    const lastIndex = monthArrays.length - 1;
    const firstIndex = 0;
    const currentYear: number = date.getFullYear();
    const currentMonthIndex: number = date.getMonth();

    let startMonthIndex =
      currentMonthIndex - 1 < 0 ? lastIndex : currentMonthIndex - 1;
    let startYear: number =
      currentMonthIndex - 1 < 0 ? currentYear - 1 : currentYear;
    let startMonthInString = monthArrays[startMonthIndex];

    let endMonthIndex =
      currentMonthIndex + 1 > lastIndex ? firstIndex : currentMonthIndex + 1;
    let endYear: number =
      currentMonthIndex + 1 > lastIndex ? currentYear + 1 : currentYear;
    let endMonthInString = monthArrays[endMonthIndex];

    let dateRange: DateRangeFilter = {
      startDate: startYear + '-' + startMonthInString + '-' + date.getDate(),
      endDate: endYear + '-' + endMonthInString + '-' + date.getDate(),
    };
    return dateRange;
  }

  // public static convertDateToGivenFormatString(date: Date, format: string) {
  //   return moment(new Date(date)).format(format);
  // }

  // public static convertStringToDateFromGivenFormat(
  //   date: string,
  //   format: string
  // ): Date {
  //   return moment(date, format).toDate();
  // }

  // public static format(date: any) {
  //   return moment(date).format('HH:mm DD-MM-YYYY');
  // }
}

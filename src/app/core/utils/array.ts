/**
 * ArrayUtil
 * @param array : any[]
 */
export class ArrayUtil {
  static isNullOrZero(arr: any): boolean {
    if (!arr) {
      return true;
    } else {
      if (arr.length === 0) {
        return true;
      } else if (
        arr.length === 1 &&
        (arr[0] === null || arr[0] === undefined)
      ) {
        return true;
      }
      return false;
    }
  }
  static deepCopyArray(arr: any[]): any[] {
    return [...arr].map((x) => Object.assign({}, x));
  }

  static getKeyNameEnum(myEnum: any, value: string) {
    return Object.entries(myEnum).find(([key, val]) => val === value)?.[0];
  }
}

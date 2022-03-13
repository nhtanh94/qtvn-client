/**
 * Check type null or empty
 * @param text: string
 */
export class StringUtil {
  static isNullOrEmpty(s: string): boolean {
    if (!s) {
      return true;
    } else {
      if (s.trim() === '') {
        return true;
      }
      return false;
    }
  }
  static trim(str: any) {
    if (typeof str === 'string') {
      return str
        .split(' ')
        .filter((x) => x)
        .join(' ');
    } else {
      return str;
    }
  }
  static trimKeyword(e: any) {
    if (typeof e === 'string') {
      return e
        .trim()
        .split(' ')
        .filter((x) => x)
        .join(' ');
    } else if (e && typeof e === 'object') {
      Object.keys(e).forEach((x: string) => {
        e[x] ? (e[x] = this.trim(e[x])) : '';
      });
      return e;
    } else {
      return e;
    }
  }

  static trimObj(obj: any) {
    Object.keys(obj).forEach((e) => {
      if (obj[e]) {
        if (Array.isArray(obj[e])) {
          obj[e] = obj[e]
            .map((x: string) => this.trimKeyword(x))
            .filter((x: string) => x && x !== '');
        } else {
          obj[e] = this.trimKeyword(obj[e]);
        }
      }
    });
    return obj;
  }

  static trimInputContentInObject(obj: any): any {
    Object.keys(obj).forEach((e) => {
      if (obj[e]) {
        if (Array.isArray(obj[e])) {
          obj[e].map((x: string) => StringUtil.trim(x));
        } else {
          obj[e] = StringUtil.trim(obj[e]);
        }
      }
    });
    return obj;
  }

  static trimContentInObject(obj: any): any {
    Object.keys(obj).forEach((e) => {
      if (obj[e]) {
        if (Array.isArray(obj[e])) {
          obj[e] = obj[e]
            .map((x: string) => StringUtil.trimKeyword(x))
            .filter((x: string) => x && x !== '');
        } else {
          obj[e] = StringUtil.trimKeyword(obj[e]);
        }
      }
    });
    return obj;
  }

  // return yyyy-MM-dd
  static formatFilterDDMMYYY(value: string): string {
    if (value === '') {
      return '';
    }
    return value.split('/').reverse().join('-');
  }

  static isNotHttps(str: string): boolean {
    if (str?.includes('http') && !str?.includes('https')) {
      return true;
    }

    return false;
  }

  static removeVietnameseTones(str: string): string {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // ̀ ́ ̃ ̉ ̣
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    str = str.replace(/ + /g, ' ');
    str = str.trim();
    // Remove punctuations
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      ' '
    );
    return str;
  }

  static slicePatientName(name: string): string {
    const split_name = name.split(' ');
    const length = split_name.length;
    const two = this.removeVietnameseTones(split_name[length - 1].slice(0, 2));
    return two;
  }

  // Get full name from obj has fristName and lastName
  static getFullName(obj: any) {
    const firstName = obj.firstName;
    const lastName = obj.lastName;

    if (firstName && lastName) return `${firstName} ${lastName}`.trim();
    else if (!firstName && lastName) return firstName.trim();
    else if (firstName && !lastName) return lastName.trim();
    else return '';
  }
}

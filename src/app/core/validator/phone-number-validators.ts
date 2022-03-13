import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PhoneNumberValidator(): ValidatorFn {
  // console.log(regex);
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isValid = true;
    const controlVal: string = control.value;
    if (controlVal && controlVal !== '') {
      const checkRegex = String(controlVal).match(
        /(0)+([0-9]{9})|(84)+([0-9]{9})/
      );

      // Tìm ký tự, chữ cái trong số điện thoại
      const indexChar = controlVal
        .split('')
        .findIndex((n) => !parseInt(n) && parseInt(n) !== 0);

      if (indexChar !== -1) {
        isValid = false;
      } else {
        if (!checkRegex) {
          isValid = false;
        } else {
          isValid = true;
        }
      }
    }
    return isValid ? null : { other: 'Vui lòng nhập đúng số điện thoại!' };
  };
}

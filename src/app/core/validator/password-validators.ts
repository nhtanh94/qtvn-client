import { AbstractControl, ValidatorFn } from '@angular/forms';

export function PasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    let isValid = true;
    const controlVal: string = control.value;
    if (controlVal && controlVal !== '') {
      const checkRegex = String(controlVal).match(/^\d+(,\d+)*$/);

      const lenghtPassword = controlVal.length;
      if (!checkRegex || lenghtPassword !== 6) {
        isValid = false;
        return isValid
          ? null
          : { other: 'Mật khẩu phải bao gồm 6 số và không chứa ký tự nào' };
      }
    }
    return null;
  };
}

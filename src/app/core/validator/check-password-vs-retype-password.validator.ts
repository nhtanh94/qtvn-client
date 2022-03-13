import { AbstractControl, ValidationErrors } from '@angular/forms';

// Kiểm tra mật khẩu và mật khẩu nhập lại trùng khớp
export function CheckPasswordVsRetypePassword(
  control: AbstractControl
): ValidationErrors | null {
  if (control && control.get('password') && control.get('retypePassword')) {
    const error = { error: 'Mật khẩu bạn nhập chưa trùng khớp' };
    const password = control.get('password')?.value;
    const retypePassword = control.get('retypePassword')?.value;

    if (retypePassword) {
      if (password !== retypePassword) {
        control.get('retypePassword')?.setErrors(error);
      } else {
        control.get('retypePassword')?.setErrors(null);
      }
    }
    return null;
  }
  return null;
}

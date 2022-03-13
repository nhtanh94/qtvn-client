import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior,
} from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserV4Service } from 'src/app/core/services/user-v4.service';
import { PasswordValidator } from 'src/app/core/validator/password-validators';
import { DestroyableComponent } from 'src/app/shared/abstracts/destroyable.component';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent extends DestroyableComponent implements OnInit {
  error = '';
  loading = false;
  activeItemIndex: any = 0;
  form!: FormGroup;
  windowH = 0;
  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public platform: Platform,
    private message: NzMessageService
  ) {
    super();
  }

  validateForm!: FormGroup;

  submitForm(): void {
    if (this.validateForm.valid) {
      this.authService
        .loginWithPassword(
          this.validateForm.controls.userName.value,
          this.validateForm.controls.password.value
        )
        .subscribe((res) => {
          if (res.data?.succeeded) {
            this.saveTokenLocalStorage(res.data.result);
            this.message.success('Đăng nhập thành công');
            this.router.navigate(['/']);
          } else this.message.error(res.error || 'Đang nhập không thành công');
        });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  saveTokenLocalStorage(tokenOject: any): void {
    localStorage.setItem('_token', JSON.stringify(tokenOject));
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }
}

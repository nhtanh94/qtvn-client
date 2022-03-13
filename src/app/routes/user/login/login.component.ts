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
import { PhoneNumberValidator } from 'src/app/core/validator/phone-number-validators';
import { DestroyableComponent } from 'src/app/shared/abstracts/destroyable.component';

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
    // private msg: NotificationService,
    private userV4Service: UserV4Service,
    private authService: AuthService,
    public platform: Platform
  ) {
    super();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, PhoneNumberValidator()]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, PasswordValidator()]),
      ],
      remember: false,
    });
  }

  ngOnInit(): void {
    this.initScrollMobile();
  }

  onClick(item: string) {
    // this.msg.error(item);
  }

  // FIXME: check wrong password 5 times
  login() {
    // 0587080907 | 111111/123456/000000
    this.loading = true;
    const { username, password } = this.form.value;
    this.authService.loginWithPassword(username, password).subscribe(
      (res) => {
        this.loading = false;
        console.log(res);
        if (res?.data?.succeeded !== true) {
          this.error = res?.data?.error?.message!;
          // this.msg.error(this.error, 'Đăng nhập');
          // return;
        }

        const user: any = new Object();
        user.expired = +new Date() + 1000 * 60 * 30;
        user.avatar = 'assets/tmp/img/avatar.jpg';
        user.phoneNumber = username;
        // Set user token information
        if (res?.data?.result) {
          this.setLocalStorageUser(res?.data?.result, user);
          localStorage.setItem('_tk_hco_bk', JSON.stringify(user));
          // this.msg.success('Đăng nhập thành công!');

          // Get User info
          this.userV4Service.getInfo().subscribe((res: any) => {
            if (res) {
              if (res.succeeded) {
                const result = res.result;
                const info: any = new Object();
                info.id = result.id;
                info.name = result.name;
                info.userName = result.userName;
                info.email = result.email;
                info.phone = result.phone;
                info.photoProfile = result.photoProfile;
                info.enabled = result.enabled;
                // TEST:
                info.percentInfoCompleted = 90;
                // info.percentInfoCompleted = result.percentInfoCompleted;
                info.primaryPatientId = result?.primaryPatientId;
                info.patient = result.patient;
                localStorage.setItem('_in_hco_bk', JSON.stringify(info));

                this.redirect(result);
              }
            }
          });
        }
      },
      (err: any) => {
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  redirect(info: any): void {
    if (info.primaryPatientId) {
      this.router.navigate(['']);
    } else {
      this.router.navigate(['ho-so/tao-moi']);
    }
  }

  setLocalStorageUser(rs: any, user: any): any {
    user.access_token = rs.access_token;
    user.refresh_token = rs.refresh_token;
    user.expires_in = rs.expires_in;
    user.refresh_expires_in = rs.refresh_expires_in;
    user.token_type = rs.token_type;
    user.session_state = rs.session_state;
    user.scope = rs.scope;
    user.id_token = rs.id_token;
    return user;
  }
  // NOTE : Fix keyboard virtual mobile opening, password input covered.
  initScrollMobile() {
    if (this.platform.ANDROID || this.platform.IOS)
      window.addEventListener('resize', (e) => {
        const ele = document.getElementsByClassName('login-button');
        ele[0]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
  }
}

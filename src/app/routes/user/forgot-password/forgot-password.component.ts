import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { interval, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActionVerifyOtpEnum } from 'src/app/core/enums/action-verify-otp.enum';
import { AuthService } from 'src/app/core/services/auth.service';
import { CheckPasswordVsRetypePassword } from 'src/app/core/validator/check-password-vs-retype-password.validator';
import { PasswordValidator } from 'src/app/core/validator/password-validators';
import { PhoneNumberValidator } from 'src/app/core/validator/phone-number-validators';
import { DestroyableComponent } from 'src/app/shared/abstracts/destroyable.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
})
export class ForgotPasswordComponent
  extends DestroyableComponent
  implements OnInit
{
  @Output() evtSwitchTabLogin = new EventEmitter();

  currentStep: 'phone' | 'otp' | 'password' = 'phone';
  form_otp!: FormGroup;
  form_password!: FormGroup;
  form_phone!: FormGroup;
  loading = false;
  sessionInfo = '';
  sessionInfoByOtpSend = '';
  sessionInfoByCheckAndSend = '';

  timeReSendOTP = 120000;
  interval = interval(1000);
  subScriptionInterval!: Subscription;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private msg: NotificationService,
    private cdr: ChangeDetectorRef
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    // PHONE
    this.form_phone = this.fb.group({
      phoneNumber: [
        '',
        Validators.compose([Validators.required, PhoneNumberValidator()]),
      ],
    });

    // OTP
    this.form_otp = this.fb.group({
      otp1: ['', [Validators.required, Validators.maxLength(1)]],
      otp2: ['', [Validators.required, Validators.maxLength(1)]],
      otp3: ['', [Validators.required, Validators.maxLength(1)]],
      otp4: ['', [Validators.required, Validators.maxLength(1)]],
      otp5: ['', [Validators.required, Validators.maxLength(1)]],
      otp6: ['', [Validators.required, Validators.maxLength(1)]],
    });

    // PASSWORD
    this.form_password = this.fb.group(
      {
        password: [
          '',
          Validators.compose([Validators.required, PasswordValidator()]),
        ],
        retypePassword: ['', Validators.compose([Validators.required])],
      },
      { validators: CheckPasswordVsRetypePassword }
    );
  }

  // G???i OTP
  submitOTP() {
    this.loading = true;
    const otp = Object.keys(this.form_otp.value)
      .map((val: any) => this.form_otp.value[val])
      .join('');
    if (!otp) {
      // this.msg.error('Vui l??ng nh???p m?? otp');
      return;
    }
    this.authService
      .verifyOtpCheckAndSend(
        this.sessionInfoByOtpSend,
        otp,
        ActionVerifyOtpEnum.RESET_PASSWORD
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          if (res?.succeeded) {
            this.sessionInfoByCheckAndSend = res?.result?.sessionInfo;
            // this.msg.success('X??c th???c th??nh c??ng!');

            // Chuy???n t???i b?????c ti???p theo nh???p password
            this.resetValue('password');
            this.currentStep = 'password';

            this.cdr.detectChanges();
          } else {
            // this.msg.error(
            //   res.error.message || '???? c?? l???i x???y ra, vui l??ng th??? l???i sau!'
            // );
          }
        },
        (err) => {
          this.loading = false;
          // this.msg.success('???? c?? l???i x???y ra, vui l??ng th??? l???i sau!');
        },
        () => {
          this.loading = false;
        }
      );
  }

  // G???i S??? ??i???n tho???i
  submitPhoneNumber() {
    const phoneNumber = this.form_phone.controls['phoneNumber'].value;
    if (!phoneNumber) {
      // this.msg.error('Vui l??ng nh???p s??? ??i???n tho???i');
      return;
    }

    this.loading = true;
    this.authService
      .sendOTP(phoneNumber)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          if (res?.succeeded) {
            this.sessionInfoByOtpSend = res?.result?.sessionInfo;
            this.setTimeReSend();
            // this.msg.success(
            //   'M?? x??c nh???n g???m 6 s??? ???? ???????c g???i ?????n s??? ??i???n tho???i c???a b???n. Vui l??ng ki???m tra v?? nh???p m?? x??c nh???n!'
            // );

            // Chuy???n t???i b?????c ti???p theo nh???p OTP
            this.resetValue('otp');
            this.currentStep = 'otp';

            this.cdr.detectChanges();
          } else {
            // this.msg.error(
            //   res.error.message || '???? c?? l???i x???y ra, vui l??ng th??? l???i sau!'
            // );
          }
        },
        (err) => {
          // this.msg.success('???? c?? l???i x???y ra, vui l??ng th??? l???i sau!');
        },
        () => {
          this.loading = false;
        }
      );
  }

  resendOTP() {
    if (this.timeReSendOTP === 0) {
      this.submitPhoneNumber();
    }
  }

  changePhoneNumber() {
    this.currentStep = 'phone';
    this.subScriptionInterval?.unsubscribe();
  }

  submitPassword() {
    if (!this.form_password.valid) {
      // this.msg.error('Vui l??ng Ki???m tra l???i m???t kh???u');
      return;
    }

    this.loading = true;
    const { password, retypePassword } = this.form_password.value;
    this.authService
      .createPassword(this.sessionInfoByCheckAndSend, password, retypePassword)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          if (res.succeeded) {
            // this.msg.success('?????i m???t kh???u th??nh c??ng!');

            // Chuy???n sang tab login
            this.evtSwitchTabLogin.emit('');

            this.cdr.detectChanges();
          } else {
            // this.msg.error(
            //   res.error.message || '???? c?? l???i x???y ra, vui l??ng th??? l???i sau!'
            // );
          }
        },
        (err) => {
          // this.msg.error('???? c?? l???i x???y ra, vui l??ng th??? l???i sau!');
        },
        () => {
          this.loading = false;
        }
      );
  }

  getElement(ind: number) {
    return <HTMLInputElement>document.getElementById(`otp${ind}`);
  }

  otpKeyUpEvent(index: number, e: any) {
    const evtCode = e.which || e.keyCode;
    if (isNaN(e.target.value)) {
      this.form_otp.controls[`otp${index}`].setValue('');
    }
    if (this.getElement(index).value.length === 1) {
      if (index !== 6) {
        this.getElement(index + 1).focus();
      } else {
        this.getElement(index).focus();
      }
    }
    if (evtCode === 8 && index !== 1) {
      this.getElement(index - 1).focus();
    }
  }

  otpFocusEvent(ind: number) {
    for (let i = 1; i < ind; i++) {
      const currentElement = this.getElement(i);
      if (!currentElement.value) {
        currentElement.focus();
        break;
      }
    }
  }

  resetValue(key: string) {
    switch (key) {
      case 'phone':
        break;
      case 'otp':
        this.form_otp.reset();
        this.form_otp.markAsUntouched();
        break;
      case 'password':
        this.form_password.reset();
        this.form_password.markAsUntouched();
        break;
      default:
        break;
    }

    this.cdr.detectChanges();
  }

  // set th???i gian g???i l???i otp
  setTimeReSend() {
    this.timeReSendOTP = 120000;
    this.subScriptionInterval = this.interval.subscribe((val) => {
      if (this.timeReSendOTP !== 0) {
        this.timeReSendOTP = this.timeReSendOTP - 1000;
      }

      // stop interval
      if (this.timeReSendOTP === 0) {
        this.subScriptionInterval.unsubscribe();
      }
    });
  }
}

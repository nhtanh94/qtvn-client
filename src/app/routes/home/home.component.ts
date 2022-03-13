import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { IResponseV4 } from 'src/app/core/abstracts/iResponseV4.interface';
import { CurrentUserVm } from 'src/app/core/models/view-model/current-user.model';
import { DestroyableComponent } from 'src/app/shared/abstracts/destroyable.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent extends DestroyableComponent implements OnInit {
  form!: FormGroup;
  skeleton = false;
  data$!: Observable<IResponseV4<CurrentUserVm>>;

  constructor(private fb: FormBuilder) {
    super();
    this.initForm();
  }

  ngOnInit(): void {
    // this.data$ = this.authService.loginWithPassword('0587080907', '000000');
  }

  initForm() {
    this.form = this.fb.group({
      query: '',
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IResponseV4 } from 'src/app/core/abstracts/iResponseV4.interface';
import { CurrentUserVm } from 'src/app/core/models/view-model/current-user.model';
import { UserService } from 'src/app/core/services/user.service';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private user: UserService
  ) {
    super();
    this.initForm();
  }

  ngOnInit(): void {
    const userLogin = this.user.getToken();
    if (!userLogin) {
      this.router.navigate(['user/login']);
      return;
    }
  }

  initForm() {
    this.form = this.fb.group({
      query: '',
    });
  }
}

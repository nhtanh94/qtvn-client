import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackLoginGuard } from './check-back-login';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [BackLoginGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BackLoginGuard],
})
export class UserRoutingModule {}

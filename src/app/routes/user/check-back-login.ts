import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

// NOTE : Block user back to login page if login success.
@Injectable()
export class BackLoginGuard implements CanActivate {
  constructor(private user: UserService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const userIsLogin = this.user.getCurrentUser();
    if (userIsLogin) return false;
    return true;
  }
}

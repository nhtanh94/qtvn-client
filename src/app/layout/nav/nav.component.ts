import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.service';
import { DestroyableComponent } from 'src/app/shared/abstracts/destroyable.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
})
export class NavComponent extends DestroyableComponent implements OnInit {
  @ViewChild('mobileMenu') mobileMenu: ElementRef<HTMLDivElement> | undefined;
  isShowMenu = true;

  constructor(
    private auth: AuthenticationService,
    private userService: UserService
  ) {
    super();
  }

  showMenu(): void {
    this.mobileMenu?.nativeElement.classList.toggle('hidden');
  }

  get currentUser() {
    return this.userService.getCurrentUser();
  }

  get currentUserName() {
    return this.sliceName(this.currentUser?.name, 15);
  }

  ngOnInit() {}

  sliceName(value: any, length: any): any {
    try {
      if (value?.length <= length) {
        return value;
      }
      const str = value.slice(0, length) + '...';
      return str;
    } catch (error) {
      return value;
    }
  }

  logout() {
    this.auth.logout();
    this.isShowMenu = false;
  }
}

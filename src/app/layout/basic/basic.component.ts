import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.less'],
})
export class LayoutBasicComponent {
  isCollapsed = true;
  constructor(private router: Router) {}
  goLogin() {
    this.router.navigate(['/user/login']);
  }
}

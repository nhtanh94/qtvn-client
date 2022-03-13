import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.less'],
})
export class Page404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  backToHome(): void {
    this.router.navigate([`/`]);
  }
}

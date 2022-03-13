import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-500',
  templateUrl: './500.component.html',
  styleUrls: ['./500.component.less'],
})
export class Page500Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  reloadPage() {
    location.reload();
  }
}

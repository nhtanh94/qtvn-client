import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-503',
  templateUrl: './503.component.html',
  styleUrls: ['./503.component.less'],
})
export class Page503Component implements OnInit {
  constructor() {}

  ngOnInit() {}

  reloadPage() {
    location.reload();
  }
}

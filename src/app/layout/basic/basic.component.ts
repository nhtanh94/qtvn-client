import { Component } from '@angular/core';
@Component({
  selector: 'app-layout-basic',
  template: `
    <app-nav></app-nav>
    <router-outlet (deactivate)="onDeactivate()"></router-outlet>
    <!-- <app-download></app-download> -->
    <!-- <app-footer></app-footer> -->
  `,
  styles: ['.root-layout {background-color: #f6f6f6;}'],
})
export class LayoutBasicComponent {
  constructor() {}
  onDeactivate(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Environment } from '../../utils/environment-utils';
@Component({
  selector: 'app-debug-banner',
  templateUrl: './debug-banner.component.html',
  styleUrls: ['./debug-banner.component.less'],
})
export class DebugBannerComponent implements OnInit {
  environmentName = '';
  ENVIRONMENT = Environment.CONST_ENVIRONMENT;
  constructor() {}
  ngOnInit(): void {
    this.environmentName = Environment.getEnvironmentName();
  }
}

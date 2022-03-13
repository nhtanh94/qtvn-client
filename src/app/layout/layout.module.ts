import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';
import { DownloadComponent } from './download/download.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

const COMPONENTS = [
  LayoutBasicComponent,
  LayoutBlankComponent,
  NavComponent,
  FooterComponent,
  DownloadComponent,
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, LazyLoadImageModule],
  declarations: [...COMPONENTS],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class LayoutModule {}

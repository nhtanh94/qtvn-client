import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';
import { NgZorroAntdModule } from '../ng-zoro.module';
import { LayoutBasicComponent } from './basic/basic.component';
import { LayoutBlankComponent } from './blank/blank.component';

const COMPONENTS = [LayoutBasicComponent, LayoutBlankComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    LazyLoadImageModule,
    NgZorroAntdModule,
  ],
  declarations: [...COMPONENTS],
  providers: [{ provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks }],
})
export class LayoutModule {}

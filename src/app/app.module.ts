import { NgModule } from '@angular/core';
import {
  BrowserModule,
  BrowserTransferStateModule,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugBannerComponent } from './shared/components/debug-banner/debug-banner.component';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {
  TransferHttpModule,
  TransferHttpService,
} from '@gorniv/ngx-transfer-http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { DefaultInterceptor } from './core/net/default.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  LazyLoadImageModule,
  LAZYLOAD_IMAGE_HOOKS,
  ScrollHooks,
} from 'ng-lazyload-image';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
    LazyLoadImageModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  declarations: [AppComponent, DebugBannerComponent],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    { provide: LAZYLOAD_IMAGE_HOOKS, useClass: ScrollHooks },
    TransferHttpService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

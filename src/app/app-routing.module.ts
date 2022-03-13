import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBasicComponent } from './layout/basic/basic.component';
import { Page404Component } from './routes/404/404.component';
import { Page500Component } from './routes/500/500.component';
import { Page503Component } from './routes/503/503.component';
import { NoInternetComponent } from './routes/no-internet/no-internet.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    loadChildren: () =>
      import('./routes/home/home.module').then((x) => x.HomeModule),
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./routes/user/user.module').then((x) => x.UserModule),
  },
  {
    path: 'error/500',
    component: LayoutBasicComponent,
    children: [{ path: '', component: Page500Component }],
  },
  {
    path: 'error/503',
    component: LayoutBasicComponent,
    children: [{ path: '', component: Page503Component }],
  },
  {
    path: 'error/no-internet',
    component: LayoutBasicComponent,
    children: [{ path: '', component: NoInternetComponent }],
  },
  {
    path: '**',
    component: LayoutBasicComponent,
    children: [
      { path: '', component: Page404Component },
      { path: 'error/404', component: Page404Component },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'top',
      // preloadingStrategy: CustomPreloadingStrategy,
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

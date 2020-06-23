import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './customer-information/customer-info/customer-info.component';

import {
  OKTA_CONFIG,
  OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent,
} from '@okta/okta-angular';

import config from './app-auth.config';

const routes: Routes = [
  {
    path: 'home',
    component: CustomerInfoComponent,
    canActivate: [ OktaAuthGuard ]
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent,
  },
  {
    path: 'vehicle',
    loadChildren: () => import('./vehicle-information/vehicle-information.module').then(m => m.VehicleInformationModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { provide: OKTA_CONFIG, useValue: config.oidc },
  ],
})
export class AppRoutingModule { }

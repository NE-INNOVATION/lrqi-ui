import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerInfoComponent } from './customer-information/customer-info/customer-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: CustomerInfoComponent
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

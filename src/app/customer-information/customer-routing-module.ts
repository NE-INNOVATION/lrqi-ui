import { Routes, RouterModule } from "@angular/router";
import { CustomerInfoComponent } from "./customer-info/customer-info.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: 'customer', component: CustomerInfoComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class CustomerRoutingModule {
  }
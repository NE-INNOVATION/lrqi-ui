import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { DriverInfoComponent } from "./driver-info/driver-info.component";

const routes: Routes = [
    { path: 'driver', component: DriverInfoComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class DriverRoutingModule {
  }
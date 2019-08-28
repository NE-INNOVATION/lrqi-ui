import { Routes, RouterModule } from "@angular/router";
import { VehicleInfoComponent } from "./vehicle-info/vehicle-info.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    { path: '', component: VehicleInfoComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class VehicleRoutingModule {
  }
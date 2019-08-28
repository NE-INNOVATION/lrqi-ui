import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { IncidentInfoComponent } from "./incident-info/incident-info.component";


const routes: Routes = [
    { path: 'incident', component: IncidentInfoComponent }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class IncidentRoutingModule {
  }
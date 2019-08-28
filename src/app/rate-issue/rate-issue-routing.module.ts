import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RateComponent } from "./rate-component/rate-component.component";
import { PolicyInfoComponent } from "./policy-info/policy-info.component";

const routes: Routes = [
    { path: 'rate', component: RateComponent },
    { path: 'policy', component: PolicyInfoComponent}
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class RateIssueRoutingModule {
  }
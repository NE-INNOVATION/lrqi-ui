import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RateIssueRoutingModule } from './rate-issue-routing.module';
import { RateComponent } from './rate-component/rate-component.component';
import { PolicyInfoComponent } from './policy-info/policy-info.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import { RateService } from '../services/rate.service';
import { PolicyService } from '../services/policy.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    RateIssueRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RateComponent,
    PolicyInfoComponent
  ],
  exports: [
    RateComponent,
    PolicyInfoComponent
  ],
  providers: [
    RateService,
    PolicyService
  ]
})
export class RateIssueModule { }

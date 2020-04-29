import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerRoutingModule } from './customer-routing-module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  declarations: [
    CustomerInfoComponent
  ],
  exports: [
    CustomerInfoComponent
  ]
})
export class CustomerInformationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { VehicleService } from '../services/vehicle.service';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [
    VehicleInfoComponent,
    VehicleDetailsComponent
  ],
  exports: [
    VehicleInfoComponent,
    VehicleDetailsComponent
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleInformationModule { }

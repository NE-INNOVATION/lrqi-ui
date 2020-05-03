import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriverRoutingModule } from './driver-routing.module';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { DriverDetailsComponent } from './driver-details/driver-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import { CommonService } from '../services/common.service';
import { DriverService } from '../services/driver.service';
import {MatSelectModule} from '@angular/material/select';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    DriverRoutingModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatMomentDateModule,
    MatDatepickerModule
  ],
  declarations: [
    DriverInfoComponent,
    DriverDetailsComponent
  ],
  exports: [
    DriverInfoComponent,
    DriverDetailsComponent
  ],
  providers: [
    DriverService
  ],
})
export class DriverInformationModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentInfoComponent } from './incident-info/incident-info.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import { IncidentService } from '../services/incident.service';


@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule
  ],
  declarations: [
    IncidentInfoComponent,
    IncidentDetailsComponent
  ],
  exports: [
    IncidentInfoComponent,
    IncidentDetailsComponent
  ],
  providers: [
    IncidentService
  ]
})
export class IncidentInformationModule { }

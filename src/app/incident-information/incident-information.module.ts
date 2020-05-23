import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentRoutingModule } from './incident-routing.module';
import { IncidentInfoComponent } from './incident-info/incident-info.component';
import { IncidentDetailsComponent } from './incident-details/incident-details.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IncidentService } from '../services/incident.service';
import {MatSelectModule} from '@angular/material/select';
import { MatMomentDateModule, MomentDateAdapter } from "@angular/material-moment-adapter";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/incidents.reducer';
import { EffectsModule } from '@ngrx/effects';
import { IncidentEffects } from './state/incident.effects';
@NgModule({
  imports: [
    CommonModule,
    IncidentRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    StoreModule.forFeature('incidents', reducer),
    EffectsModule.forFeature([IncidentEffects])
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

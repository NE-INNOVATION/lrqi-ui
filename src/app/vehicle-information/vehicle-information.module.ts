import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleRoutingModule } from './vehicle-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { VehicleService } from '../services/vehicle.service';
import {MatSelectModule} from '@angular/material/select';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/vehicles.reducer';
import { VehicleEffects } from './state/vehicle.effects';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  imports: [
    CommonModule,
    VehicleRoutingModule,
    MatInputModule,
    MatStepperModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatTableModule,
    MatCheckboxModule,
    StoreModule.forFeature('vehicles', reducer),
    EffectsModule.forFeature([VehicleEffects])
  ],
  declarations: [
    VehicleInfoComponent,
    VehicleListComponent
  ],
  exports: [
    VehicleInfoComponent,
    VehicleListComponent
  ],
  providers: [
    VehicleService
  ]
})
export class VehicleInformationModule { }

import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { VehicleService } from '../../services/vehicle.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as vehicleActions from './vehicle.actions';
import { Vehicle } from 'src/app/models/vehicle.model';

@Injectable()
export class VehicleEffects {

  constructor(private vehicleService: VehicleService,
    private actions$: Actions) { }

  @Effect()
  createVehicle$: Observable<Action> = this.actions$.pipe(
    ofType(vehicleActions.VehicleActionTypes.CreateVehicle),
    map((action: vehicleActions.CreateVehicle) => action.payload),
    mergeMap((vehicle: Vehicle) =>
      this.vehicleService.createVehicle(vehicle).pipe(
        map(newVehicle => (new vehicleActions.CreateVehicleSuccess(newVehicle))),
        catchError(err => of(new vehicleActions.CreateVehicleFail(err)))
      )
    )
  );

}
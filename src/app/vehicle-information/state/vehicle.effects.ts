import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { VehicleService } from '../../services/vehicle.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as vehicleActions from './vehicle.actions';

@Injectable()
export class VehicleEffects {

  constructor(private vehicleService: VehicleService,
              private actions$: Actions) { }

  @Effect()
  loadVehicles$: Observable<Action> = this.actions$.pipe(
    ofType(vehicleActions.VehicleActionTypes.Load),
    mergeMap(action =>
      this.vehicleService.getVehicles().pipe(
        map(vehicles => (new vehicleActions.LoadSuccess(vehicles))),
        catchError(err => of(new vehicleActions.LoadFail(err)))
      )
    )
  );

}
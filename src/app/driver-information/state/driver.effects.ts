import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { DriverService } from '../../services/driver.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as driverActions from './driver.actions';
import { Driver } from 'src/app/models/driver.model';

@Injectable()
export class DriverEffects {

  constructor(private driverService: DriverService,
    private actions$: Actions) { }

  @Effect()
  createDriver$: Observable<Action> = this.actions$.pipe(
    ofType(driverActions.DriverActionTypes.CreateDriver),
    map((action: driverActions.CreateDriver) => action.payload),
    mergeMap((driver: Driver) =>
      this.driverService.createDriver(driver).pipe(
        map(newDriver => (new driverActions.CreateDriverSuccess(newDriver))),
        catchError(err => of(new driverActions.CreateDriverFail(err)))
      )
    )
  );

}
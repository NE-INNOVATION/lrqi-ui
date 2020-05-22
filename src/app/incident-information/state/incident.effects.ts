import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { IncidentService } from '../../services/incident.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as incidentActions from './incident.actions';
import { Incident } from 'src/app/models/incident.model';

@Injectable()
export class IncidentEffects {

  constructor(private incidentService: IncidentService,
    private actions$: Actions) { }

  @Effect()
  createIncident$: Observable<Action> = this.actions$.pipe(
    ofType(incidentActions.IncidentActionTypes.CreateIncident),
    map((action: incidentActions.CreateIncident) => action.payload),
    mergeMap((incident: Incident) =>
      this.incidentService.createIncident(incident).pipe(
        map(newIncident => (new incidentActions.CreateIncidentSuccess(newIncident))),
        catchError(err => of(new incidentActions.CreateIncidentFail(err)))
      )
    )
  );

}
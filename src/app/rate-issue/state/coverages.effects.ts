import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { RateService } from 'src/app/services/rate.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as coverageActions from './coverages.actions';
import { Coverage } from 'src/app/models/coverage.model';


@Injectable()
export class CoverageEffects {

  constructor(private rateService: RateService,
    private actions$: Actions) { }

  @Effect()
  createCoverage$: Observable<Action> = this.actions$.pipe(
    ofType(coverageActions.CoverageActionTypes.CreateCoverage),
    map((action: coverageActions.CreateCoverage) => action.payload),
    mergeMap((coverage: Coverage) =>
      this.rateService.createCoverage(coverage).pipe(
        map(newCoverage => (new coverageActions.CreateCoverageSuccess(newCoverage))),
        catchError(err => of(new coverageActions.CreateCoverageFail(err)))
      )
    )
  );

}
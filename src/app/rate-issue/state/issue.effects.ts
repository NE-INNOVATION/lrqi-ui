import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { PolicyService } from 'src/app/services/policy.service';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as policyActions from './issue.actions';
import { Policy } from 'src/app/models/policy.model';

@Injectable()
export class PolicyEffects {

  constructor(private policyService: PolicyService,
    private actions$: Actions) { }

  @Effect()
  createCoverage$: Observable<Action> = this.actions$.pipe(
    ofType(policyActions.PolicyActionTypes.CreatePolicy),
    map((action: policyActions.CreatePolicy) => action.payload),
    mergeMap((policy: Policy) =>
      this.policyService.createPolicy(policy).pipe(
        map(newPolicy => (new policyActions.CreatePolicySuccess(newPolicy))),
        catchError(err => of(new policyActions.CreatePolicyFail(err)))
      )
    )
  );

}
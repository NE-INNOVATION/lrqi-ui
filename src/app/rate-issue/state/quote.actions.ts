import { Action } from '@ngrx/store';
import { Coverage } from 'src/app/models/coverage.model';
import { Policy } from 'src/app/models/policy.model';

export enum RateIssueActionTypes {
    SetCoverage = '[RateIssue] Set Coverage',
    ClearCoverage = '[RateIssue] Clear Coverage Info',
    InitializeCoverage = '[RateIssue] Initialize Coverage',
    SetPolicy = '[RateIssue] Set Policy',
    ClearPolicy = '[RateIssue] Clear Issue Policy',
    InitializePolicy = '[RateIssue] Initialize Policy'
}

export class SetCoverage implements Action {
    readonly type = RateIssueActionTypes.SetCoverage;
    constructor(public payload: Coverage) {}
}

export class SetPolicy implements Action {
    readonly type = RateIssueActionTypes.SetPolicy;
    constructor(public payload: Policy) {}
}

export class ClearCoverage implements Action {
    readonly type = RateIssueActionTypes.ClearCoverage;
}

export class ClearPolicy implements Action {
    readonly type = RateIssueActionTypes.ClearPolicy;
}

export class InitializeCoverage implements Action {
    readonly type = RateIssueActionTypes.InitializeCoverage;
}

export class InitializePolicy implements Action {
    readonly type = RateIssueActionTypes.InitializePolicy;
}

export type RateIssueActions = SetCoverage
 | SetPolicy
 | ClearCoverage 
 | ClearPolicy 
 | InitializeCoverage
 | InitializePolicy;
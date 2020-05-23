import { Action } from '@ngrx/store';
import { Coverage } from 'src/app/models/coverage.model';

export enum CoverageActionTypes {
    SetCoverage = '[Coverage] Set Coverage',
    ClearCoverage = '[Coverage] Clear Coverage Info',
    InitializeCoverage = '[Coverage] Initialize Coverage',
    Load = '[Coverage] Load Coverages',
    LoadSuccess = '[Coverage] Load Success',
    LoadFail = '[Coverage] Load Fail',
    CreateCoverage = '[Coverage] Create Coverage',
    CreateCoverageSuccess = '[Coverage] Create Coverage Success',
    CreateCoverageFail = '[Coverage] Create Coverage Fail',
    SetQuoteId = '[Coverage] Set Coverage Id'
}
export class SetCoverage implements Action {
    readonly type = CoverageActionTypes.SetCoverage;
    constructor(public payload: Coverage) {}
}
export class ClearCoverage implements Action {
    readonly type = CoverageActionTypes.ClearCoverage;
}
export class InitializeCoverage implements Action {
    readonly type = CoverageActionTypes.InitializeCoverage;
}

export class Load implements Action {
    readonly type = CoverageActionTypes.Load;
    constructor(public payload: Array<Coverage>) {}
}

export class LoadSuccess implements Action {
    readonly type = CoverageActionTypes.LoadSuccess;

    constructor(public payload: Coverage[]) { }
}

export class LoadFail implements Action {
    readonly type = CoverageActionTypes.LoadFail;

    constructor(public payload: string) { }
}
export class CreateCoverage implements Action {
    readonly type = CoverageActionTypes.CreateCoverage;

    constructor(public payload: Coverage) { }
}

export class CreateCoverageSuccess implements Action {
    readonly type = CoverageActionTypes.CreateCoverageSuccess;

    constructor(public payload: Coverage) { }
}

export class CreateCoverageFail implements Action {
    readonly type = CoverageActionTypes.CreateCoverageFail;

    constructor(public payload: string) { }
}

export class SetQuoteId implements Action {
    readonly type = CoverageActionTypes.SetQuoteId;

    constructor(public payload: string) { }
}

export type CoverageActions = SetCoverage
 | ClearCoverage 
 | InitializeCoverage
 | Load 
 | LoadSuccess
 | LoadFail
 | CreateCoverage
 | CreateCoverageSuccess
 | CreateCoverageFail
 | SetQuoteId;
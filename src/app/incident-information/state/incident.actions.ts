import { Action } from '@ngrx/store';
import { Incident } from 'src/app/models/incident.model';

export enum IncidentActionTypes {
    SetIncident = '[Incident] Set Incident',
    ClearIncident = '[Incident] Clear Incident Info',
    InitializeIncident = '[Incident] Initialize Incident',
    Load = '[Incident] Load Incidents',
    LoadSuccess = '[Incident] Load Success',
    LoadFail = '[Incident] Load Fail',
    CreateIncident = '[Incident] Create Incident',
    CreateIncidentSuccess = '[Incident] Create Incident Success',
    CreateIncidentFail = '[Incident] Create Incident Fail',
    SetQuoteId = '[Incident] Set Quote Id'
}

export class SetIncident implements Action {
    readonly type = IncidentActionTypes.SetIncident;
    constructor(public payload: Incident) {}
}

export class ClearIncident implements Action {
    readonly type = IncidentActionTypes.ClearIncident;
}

export class InitializeIncident implements Action {
    readonly type = IncidentActionTypes.InitializeIncident;
}

export class Load implements Action {
    readonly type = IncidentActionTypes.Load;
    constructor(public payload: Array<Incident>) {}
}

export class LoadSuccess implements Action {
    readonly type = IncidentActionTypes.LoadSuccess;

    constructor(public payload: Incident[]) { }
}

export class LoadFail implements Action {
    readonly type = IncidentActionTypes.LoadFail;

    constructor(public payload: string) { }
}
export class CreateIncident implements Action {
    readonly type = IncidentActionTypes.CreateIncident;

    constructor(public payload: Incident) { }
}

export class CreateIncidentSuccess implements Action {
    readonly type = IncidentActionTypes.CreateIncidentSuccess;

    constructor(public payload: Incident) { }
}

export class CreateIncidentFail implements Action {
    readonly type = IncidentActionTypes.CreateIncidentFail;

    constructor(public payload: string) { }
}

export class SetQuoteId implements Action {
    readonly type = IncidentActionTypes.SetQuoteId;

    constructor(public payload: string) { }
}

export type IncidentActions = SetIncident
 | ClearIncident
 | InitializeIncident 
 | Load
 | LoadSuccess
 | LoadFail
 | CreateIncident
 | CreateIncidentSuccess
 | CreateIncidentFail
 | SetQuoteId;
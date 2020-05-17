import { Action } from '@ngrx/store';
import { Incident } from 'src/app/models/incident.model';

export enum IncidentActionTypes {
    SetIncident = '[Incident] Set Incident',
    ClearIncident = '[Incident] Clear Incident Info',
    InitializeIncident = '[Incident] Initialize Incident',
    Load = '[Incident] Load Incidents'
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

export type IncidentActions = SetIncident
 | ClearIncident
 | InitializeIncident 
 | Load;
import { Action } from '@ngrx/store';
import { Driver } from 'src/app/models/driver.model';

export enum DriverActionTypes {
    SetDriver = '[Driver] Set Driver',
    ClearDriver = '[Driver] Clear Driver Info',
    InitializeDriver = '[Driver] Initialize Driver',
    Load = '[Driver] Load Drivers',
    LoadSuccess = '[Driver] Load Success',
    LoadFail = '[Driver] Load Fail',
    CreateDriver = '[Driver] Create Driver',
    CreateDriverSuccess = '[Driver] Create Driver Success',
    CreateDriverFail = '[Driver] Create Driver Fail',
    SetQuoteId = '[Driver] Set Quote Id'
}

export class SetDriver implements Action {
    readonly type = DriverActionTypes.SetDriver;
    constructor(public payload: Driver) {}
}

export class ClearDriver implements Action {
    readonly type = DriverActionTypes.ClearDriver;
}

export class InitializeDriver implements Action {
    readonly type = DriverActionTypes.InitializeDriver;
}

export class Load implements Action {
    readonly type = DriverActionTypes.Load;
    constructor(public payload: Array<Driver>) {}
}

export class LoadSuccess implements Action {
    readonly type = DriverActionTypes.LoadSuccess;

    constructor(public payload: Driver[]) { }
}

export class LoadFail implements Action {
    readonly type = DriverActionTypes.LoadFail;

    constructor(public payload: string) { }
}
export class CreateDriver implements Action {
    readonly type = DriverActionTypes.CreateDriver;

    constructor(public payload: Driver) { }
}

export class CreateDriverSuccess implements Action {
    readonly type = DriverActionTypes.CreateDriverSuccess;

    constructor(public payload: Driver) { }
}

export class CreateDriverFail implements Action {
    readonly type = DriverActionTypes.CreateDriverFail;

    constructor(public payload: string) { }
}

export class SetQuoteId implements Action {
    readonly type = DriverActionTypes.SetQuoteId;

    constructor(public payload: string) { }
}

export type DriverActions = SetDriver
 | ClearDriver
 | InitializeDriver 
 | Load
 | LoadSuccess
 | LoadFail
 | CreateDriver
 | CreateDriverSuccess
 | CreateDriverFail
 | SetQuoteId;
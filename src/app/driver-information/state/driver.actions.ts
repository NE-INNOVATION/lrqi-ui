import { Action } from '@ngrx/store';
import { Driver } from 'src/app/models/driver.model';

export enum DriverActionTypes {
    SetDriver = '[Driver] Set Driver',
    ClearDriver = '[Driver] Clear Driver Info',
    InitializeDriver = '[Driver] Initialize Driver',
    Load = '[Driver] Load Drivers'
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

export type DriverActions = SetDriver
 | ClearDriver
 | InitializeDriver 
 | Load;
import { Action } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';

export enum VehicleActionTypes {
    SetVehicle = '[Vehicle] Set Vehicle',
    ClearVehicle = '[Vehicle] Clear Vehicle Info',
    InitializeVehicle = '[Vehicle] Initialize Vehicle',
    Load = '[Vehicle] Load Vehicles',
    LoadSuccess = '[Vehicle] Load Success',
    LoadFail = '[Vehicle] Load Fail',
    CreateVehicle = '[Vehicle] Create Vehicle',
    CreateVehicleSuccess = '[Vehicle] Create Vehicle Success',
    CreateVehicleFail = '[Vehicle] Create Vehicle Fail',
    SetQuoteId = '[Vehicle] Set Quote Id'
}

export class SetVehicle implements Action {
    readonly type = VehicleActionTypes.SetVehicle;
    constructor(public payload: Vehicle) { }
}

export class ClearVehicle implements Action {
    readonly type = VehicleActionTypes.ClearVehicle;
}

export class InitializeVehicle implements Action {
    readonly type = VehicleActionTypes.InitializeVehicle;
}

export class Load implements Action {
    readonly type = VehicleActionTypes.Load;
    constructor(public payload: Array<Vehicle>) { }
}

export class LoadSuccess implements Action {
    readonly type = VehicleActionTypes.LoadSuccess;

    constructor(public payload: Vehicle[]) { }
}

export class LoadFail implements Action {
    readonly type = VehicleActionTypes.LoadFail;

    constructor(public payload: string) { }
}
export class CreateVehicle implements Action {
    readonly type = VehicleActionTypes.CreateVehicle;

    constructor(public payload: Vehicle) { }
}

export class CreateVehicleSuccess implements Action {
    readonly type = VehicleActionTypes.CreateVehicleSuccess;

    constructor(public payload: Vehicle) { }
}

export class CreateVehicleFail implements Action {
    readonly type = VehicleActionTypes.CreateVehicleFail;

    constructor(public payload: string) { }
}

export class SetQuoteId implements Action {
    readonly type = VehicleActionTypes.SetQuoteId;

    constructor(public payload: string) { }
}

export type VehicleActions = SetVehicle
    | ClearVehicle
    | InitializeVehicle
    | Load
    | LoadSuccess
    | LoadFail
    | CreateVehicle
    | CreateVehicleSuccess
    | CreateVehicleFail
    | SetQuoteId;
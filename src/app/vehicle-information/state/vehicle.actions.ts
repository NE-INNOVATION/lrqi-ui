import { Action } from '@ngrx/store';
import { Vehicle } from 'src/app/models/vehicle.model';

export enum VehicleActionTypes {
    SetVehicle = '[Vehicle] Set Vehicle',
    ClearVehicle = '[Vehicle] Clear Vehicle Info',
    InitializeVehicle = '[Vehicle] Initialize Vehicle',
    Load = '[Vehicle] Load Vehicles'
}

export class SetVehicle implements Action {
    readonly type = VehicleActionTypes.SetVehicle;
    constructor(public payload: Vehicle) {}
}

export class ClearVehicle implements Action {
    readonly type = VehicleActionTypes.ClearVehicle;
}

export class InitializeVehicle implements Action {
    readonly type = VehicleActionTypes.InitializeVehicle;
}

export class Load implements Action {
    readonly type = VehicleActionTypes.Load;
    constructor(public payload: Array<Vehicle>) {}
}

export type VehicleActions = SetVehicle
 | ClearVehicle
 | InitializeVehicle 
 | Load;
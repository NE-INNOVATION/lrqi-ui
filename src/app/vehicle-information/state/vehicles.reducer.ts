import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VehicleActions, VehicleActionTypes } from './vehicle.actions';
import { Vehicle } from 'src/app/models/vehicle.model';

export interface State extends fromRoot.State {
    vehicles: VehicleState
}

export interface VehicleState {
    currentVehicle: Vehicle;
    vehicles: Array<Vehicle>;
    error: string;
}

const initialState: VehicleState = {
    currentVehicle: {
        annualMileage: '',
        daysDriven: '',
        id: '',
        make: '',
        milesDriven: '',
        model: '',
        quoteId: '',
        vehicleOwned: '',
        vehiclePrimaryUse: '',
        vehicleUsage: '',
        year: ''
    },
    vehicles: [],
    error: ''
};

const getVehicleFeatureState = createFeatureSelector<VehicleState>('vehicles');

export const getVehicles = createSelector(
    getVehicleFeatureState,
    state => {
        return state.vehicles
    }
);

export const getCurentVehicle = createSelector(
    getVehicleFeatureState,
    state => {
        return state.currentVehicle
    }
);

export const getError = createSelector(
    getVehicleFeatureState,
    state => state.error
);

export function reducer(state = initialState, action: VehicleActions): VehicleState {
    switch (action.type) {
        case VehicleActionTypes.SetVehicle:
            return {
                ...state,
                currentVehicle: action.payload
            };
        case VehicleActionTypes.ClearVehicle:
            return {
                ...state,
                currentVehicle: {
                    annualMileage: '',
                    daysDriven: '',
                    id: '',
                    make: '',
                    milesDriven: '',
                    model: '',
                    quoteId: '',
                    vehicleOwned: '',
                    vehiclePrimaryUse: '',
                    vehicleUsage: '',
                    year: ''
                },
                error: ''
            }
        case VehicleActionTypes.InitializeVehicle:
            return {
                ...state,
                currentVehicle: {
                    annualMileage: '',
                    daysDriven: '',
                    id: '',
                    make: '',
                    milesDriven: '',
                    model: '',
                    quoteId: '',
                    vehicleOwned: '',
                    vehiclePrimaryUse: '',
                    vehicleUsage: '',
                    year: ''
                },
                error: ''
            }
        case VehicleActionTypes.Load:
            return {
                ...state,
                vehicles: action.payload
            }
        case VehicleActionTypes.LoadSuccess:
            return {
                ...state,
                vehicles: action.payload,
                error: ''
            };

        case VehicleActionTypes.LoadFail:
            return {
                ...state,
                vehicles: [],
                error: action.payload
            };

        default:
            return state;
    }
}
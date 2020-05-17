import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DriverActions, DriverActionTypes } from './driver.actions';
import { Driver } from 'src/app/models/driver.model';

export interface State extends fromRoot.State {
    drivers: DriverState
}

export interface DriverState {
    currentDriver: Driver,
    drivers: Array<Driver>
}

const initialState: DriverState = {
    drivers: [],
    currentDriver: {
        currentIns: '',
        education: '',
        employmentStatus: '',
        gender: '',
        id: '',
        licensedDt: '',
        maritalStatus: '',
        name: '',
        quoteId: '',
        ssn: ''
    }
};

const getDriverFeatureState = createFeatureSelector<DriverState>('drivers');

export const getVehicles = createSelector(
    getDriverFeatureState,
    state => {
        return state.drivers
    }
);

export const getCurentVehicle = createSelector(
    getDriverFeatureState,
    state => {
        return state.currentDriver
    }
);

export function reducer(state = initialState, action: DriverActions): DriverState {
    switch (action.type) {
        case DriverActionTypes.SetDriver:
            return {
                ...state,
                currentDriver: action.payload
            };
        case DriverActionTypes.ClearDriver: 
            return {
                ...state,
                currentDriver: {
                    currentIns: '',
                    education: '',
                    employmentStatus: '',
                    gender: '',
                    id: '',
                    licensedDt: '',
                    maritalStatus: '',
                    name: '',
                    quoteId: '',
                    ssn: ''
                }
            }
        case DriverActionTypes.InitializeDriver:
                return {
                    ...state,
                    currentDriver: {
                        currentIns: '',
                        education: '',
                        employmentStatus: '',
                        gender: '',
                        id: '',
                        licensedDt: '',
                        maritalStatus: '',
                        name: '',
                        quoteId: '',
                        ssn: ''
                    }
                }
        case DriverActionTypes.Load:
            return {
                ...state,
                drivers: action.payload
            }
        
        default:
            return state;
    }
}
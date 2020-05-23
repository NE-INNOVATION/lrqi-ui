import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DriverActions, DriverActionTypes } from './driver.actions';
import { Driver } from 'src/app/models/driver.model';

export interface State extends fromRoot.State {
    drivers: DriverState
}

export interface DriverState {
    currentDriver: Driver,
    drivers: Array<Driver>,
    error: string;
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
    },
    error: ''
};

const getDriverFeatureState = createFeatureSelector<DriverState>('drivers');

export const getDrivers = createSelector(
    getDriverFeatureState,
    state => {
        return state.drivers
    }
);

export const getCurentDriver = createSelector(
    getDriverFeatureState,
    state => {
        return state.currentDriver
    }
);

export const getError = createSelector(
    getDriverFeatureState,
    state => state.error
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
        case DriverActionTypes.LoadSuccess:
            return {
                ...state,
                drivers: action.payload,
                error: ''
            };

        case DriverActionTypes.LoadFail:
            return {
                ...state,
                drivers: [],
                error: action.payload
            };
        case DriverActionTypes.CreateDriverSuccess:
            return {
                ...state,
                currentDriver: action.payload,
                error: ''
            };

        case DriverActionTypes.CreateDriverFail:
            return {
                ...state,
                error: action.payload
            };
        case DriverActionTypes.SetQuoteId:
            return {
                ...state,
                currentDriver: { ...state.currentDriver, quoteId: action.payload }
            }

        default:
            return state;
    }
}
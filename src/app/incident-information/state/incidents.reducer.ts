import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncidentActions, IncidentActionTypes } from './incident.actions';
import { Incident } from 'src/app/models/incident.model';

export interface State extends fromRoot.State {
    incidents: IncidentState
}

export interface IncidentState {
    currentIncident: Incident,
    incidents: Array<Incident>,
    error: string;
}

const initialState: IncidentState = {
    currentIncident: {
        category: '',
        driver: '',
        id: '',
        quoteId: '',
        responsible: '',
        when: ''
    },
    incidents: [],
    error: ''
};

const getIncidentFeatureState = createFeatureSelector<IncidentState>('incidents');

export const getIncidents = createSelector(
    getIncidentFeatureState,
    state => {
        return state.incidents
    }
);

export const getCurentIncident = createSelector(
    getIncidentFeatureState,
    state => {
        return state.currentIncident
    }
);

export const getError = createSelector(
    getIncidentFeatureState,
    state => state.error
);

export function reducer(state = initialState, action: IncidentActions): IncidentState {
    switch (action.type) {
        case IncidentActionTypes.SetIncident:
            return {
                ...state,
                currentIncident: action.payload
            };
        case IncidentActionTypes.ClearIncident:
            return {
                ...state,
                currentIncident: {
                    category: '',
                    driver: '',
                    id: '',
                    quoteId: '',
                    responsible: '',
                    when: ''
                }
            }
        case IncidentActionTypes.InitializeIncident:
            return {
                ...state,
                currentIncident: {
                    category: '',
                    driver: '',
                    id: '',
                    quoteId: '',
                    responsible: '',
                    when: ''
                }
            }
        case IncidentActionTypes.Load:
            return {
                ...state,
                incidents: action.payload
            }
        case IncidentActionTypes.LoadSuccess:
            return {
                ...state,
                incidents: action.payload,
                error: ''
            };

        case IncidentActionTypes.LoadFail:
            return {
                ...state,
                incidents: [],
                error: action.payload
            };
        case IncidentActionTypes.CreateIncidentSuccess:
            return {
                ...state,
                currentIncident: action.payload,
                error: ''
            };

        case IncidentActionTypes.CreateIncidentFail:
            return {
                ...state,
                error: action.payload
            };
        case IncidentActionTypes.SetQuoteId:
            return {
                ...state,
                currentIncident: { ...state.currentIncident, quoteId: action.payload }
            }

        default:
            return state;
    }
}
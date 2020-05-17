import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IncidentActions, IncidentActionTypes } from './incident.actions';
import { Incident } from 'src/app/models/incident.model';

export interface State extends fromRoot.State {
    incidentss: IncidentState
}

export interface IncidentState {
    currentIncident: Incident,
    Incidents: Array<Incident>
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
    Incidents: []
};

const getIncidentFeatureState = createFeatureSelector<IncidentState>('incidents');

export const getIncidents = createSelector(
    getIncidentFeatureState,
    state => {
        return state.Incidents
    }
);

export const getCurentIncident = createSelector(
    getIncidentFeatureState,
    state => {
        return state.currentIncident
    }
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
                Incidents: action.payload
            }

        default:
            return state;
    }
}
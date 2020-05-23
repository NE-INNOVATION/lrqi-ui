import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PolicyActions, PolicyActionTypes } from './issue.actions';
import { Policy } from 'src/app/models/policy.model';

export interface State extends fromRoot.State {
    policy: PolicyState
}

export interface PolicyState {
    policy: Policy,
    error: string
}

const initialState: PolicyState = {
    policy: {
        accountNum: '',
        bankName: '',
        confirmContactNum: '',
        confirmEmail: '',
        id: '',
        policyNumber: '',
        quoteId: ''
    },
    error: ''
}

const getPolicyFeatureState = createFeatureSelector<PolicyState>('policy');

export const getPolicy = createSelector(
    getPolicyFeatureState,
    state => {
        return state.policy
    }
);

export function policyReducer(state = initialState, action: PolicyActions): PolicyState {
    switch (action.type) {
        case PolicyActionTypes.SetPolicy:
            return {
                ...state,
                policy: action.payload
            };
        case PolicyActionTypes.ClearPolicy:
            return {
                ...state,
                policy: {
                    accountNum: '',
                    bankName: '',
                    confirmContactNum: '',
                    confirmEmail: '',
                    id: '',
                    policyNumber: '',
                    quoteId: ''
                }
            }
        case PolicyActionTypes.InitializePolicy:
            return {
                ...state,
                policy: {
                    accountNum: '',
                    bankName: '',
                    confirmContactNum: '',
                    confirmEmail: '',
                    id: '',
                    policyNumber: '',
                    quoteId: ''
                }
            }
        case PolicyActionTypes.CreatePolicySuccess:
            return {
                ...state,
                policy: action.payload,
                error: ''
            };

        case PolicyActionTypes.CreatePolicyFail:
            return {
                ...state,
                error: action.payload
            };
        case PolicyActionTypes.SetQuoteId:
            return {
                ...state,
                policy: { ...state.policy, quoteId: action.payload }
            }

        default:
            return state;
    }
}
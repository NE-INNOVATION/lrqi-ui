import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RateIssueActions, RateIssueActionTypes } from './quote.actions';
import { Coverage } from 'src/app/models/coverage.model';
import { Policy } from 'src/app/models/policy.model';

export interface State extends fromRoot.State {
    quote: QuoteState
}

export interface QuoteState {
    coverage: Coverage,
    policy: Policy
}

const initialState: QuoteState = {
    coverage: {
        bi: '',
        col: '',
        comp: '',
        id: '',
        med: '',
        pd: '',
        premium: '',
        quoteId: '',
        rerim: ''
    },
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

const getQuoteFeatureState = createFeatureSelector<QuoteState>('quote');

export const getCoverage = createSelector(
    getQuoteFeatureState,
    state => {
        return state.coverage
    }
);

export const getPolicy = createSelector(
    getQuoteFeatureState,
    state => {
        return state.policy
    }
);

export function reducer(state = initialState, action: RateIssueActions): QuoteState {
    switch (action.type) {
        case RateIssueActionTypes.SetCoverage:
            return {
                ...state,
                coverage: action.payload
            };
        case RateIssueActionTypes.SetPolicy:
            return {
                ...state,
                policy: action.payload
            };
        case RateIssueActionTypes.ClearCoverage:
            return {
                ...state,
                coverage: {
                    bi: '',
                    col: '',
                    comp: '',
                    id: '',
                    med: '',
                    pd: '',
                    premium: '',
                    quoteId: '',
                    rerim: ''
                }
            }
        case RateIssueActionTypes.ClearPolicy:
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
        case RateIssueActionTypes.InitializeCoverage:
            return {
                ...state,
                coverage: {
                    bi: '',
                    col: '',
                    comp: '',
                    id: '',
                    med: '',
                    pd: '',
                    premium: '',
                    quoteId: '',
                    rerim: ''
                }
            }
        case RateIssueActionTypes.InitializePolicy:
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
        default:
            return state;
    }
}
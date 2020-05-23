import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoverageActions, CoverageActionTypes } from './coverages.actions';
import { Coverage } from 'src/app/models/coverage.model';

export interface State extends fromRoot.State {
    quote: CoverageState
}

export interface CoverageState {
    coverage: Coverage,
    coverages: Array<Coverage>,
    error: string
}

const initialState: CoverageState = {
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
    coverages: [],
    error: ''
}

const getQuoteFeatureState = createFeatureSelector<CoverageState>('coverages');

export const getCoverage = createSelector(
    getQuoteFeatureState,
    state => {
        return state.coverage
    }
);

export function reducer(state = initialState, action: CoverageActions): CoverageState {
    switch (action.type) {
        case CoverageActionTypes.SetCoverage:
            return {
                ...state,
                coverage: action.payload
            };
        case CoverageActionTypes.ClearCoverage:
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
        case CoverageActionTypes.InitializeCoverage:
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
        case CoverageActionTypes.Load:
            return {
                ...state,
                coverages: action.payload
            }
        case CoverageActionTypes.LoadSuccess:
            return {
                ...state,
                coverages: action.payload,
                error: ''
            };

        case CoverageActionTypes.LoadFail:
            return {
                ...state,
                coverages: [],
                error: action.payload
            };
        case CoverageActionTypes.CreateCoverageSuccess:
            return {
                ...state,
                coverage: action.payload,
                error: ''
            };

        case CoverageActionTypes.CreateCoverageFail:
            return {
                ...state,
                error: action.payload
            };
        case CoverageActionTypes.SetQuoteId:
            return {
                ...state,
                coverage: { ...state.coverage, quoteId: action.payload }
            }

        default:
            return state;
    }
}
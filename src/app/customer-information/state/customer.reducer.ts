import { Customer } from 'src/app/models/customer.model';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerActions, CustomerActionTypes } from './customer.actions';

export interface State extends fromRoot.State {
    customers: CustomerState
}

export interface CustomerState {
    customer: Customer,
    error: string
}

const initialState: CustomerState = {
    customer: {
        apt: '',
        dob: '',
        firstName: '',
        id: '',
        lastName: '',
        quoteId: '',
        stAddr: '',
        zipCode: ''
    },
    error: ''
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>('customers');

export const getCustomer = createSelector(
    getCustomerFeatureState,
    state => {
        return state.customer
    }
);

export function reducer(state = initialState, action: CustomerActions): CustomerState {
    switch (action.type) {
        case CustomerActionTypes.SetCustomer:
            return {
                ...state,
                customer: action.payload
            };
        case CustomerActionTypes.SetQuoteId:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    quoteId: action.payload
                }
            }
        case CustomerActionTypes.SetCustomerId:
            return {
                ...state,
                customer: {
                    ...state.customer,
                    id: action.payload
                }
            }
        case CustomerActionTypes.ClearCustomer:
            return {
                ...state,
                customer: null
            }
        case CustomerActionTypes.InitializeCustomer:
            return {
                customer: {
                    apt: '',
                    dob: '',
                    firstName: '',
                    id: '',
                    lastName: '',
                    quoteId: '',
                    stAddr: '',
                    zipCode: ''
                },
                error: ''
            }
        case CustomerActionTypes.CreateCustomerSuccess:
            return {
                ...state,
                customer: action.payload,
                error: ''
            };

        case CustomerActionTypes.CreateCustomerFail:
            return {
                ...state,
                error: action.payload
            };

        default:
            return state;
    }
}
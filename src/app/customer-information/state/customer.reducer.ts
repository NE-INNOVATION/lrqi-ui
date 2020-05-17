import { Customer } from 'src/app/models/customer.model';
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerActions, CustomerActionTypes } from './customer.actions';

export interface State extends fromRoot.State {
    customers: CustomerState
}

export interface CustomerState {
    customer: Customer,
    quoteIds: Array<string>
}

const initialState: CustomerState = {
    quoteIds: [],
    customer: null
}

const getCustomerFeatureState = createFeatureSelector<CustomerState>('customers');

export const getCustomer = createSelector(
    getCustomerFeatureState,
    state => {
        console.log('returning', state.customer)
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
                quoteIds: [],
                customer: {
                    apt: '',
                    dob: '',
                    firstName: '',
                    id: '',
                    lastName: '',
                    quoteId: '',
                    stAddr: '',
                    zipCode: ''
                }    
            }
        default:
            return state;
    }
}
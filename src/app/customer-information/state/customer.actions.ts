import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/customer.model';

export enum CustomerActionTypes {
    SetCustomer = '[Customer] Set Customer',
    SetQuoteId = '[Customer] Set Quote Id',
    SetCustomerId = '[Customer] Set Customer Id',
    ClearCustomer = '[Customer] Clear Customer Info',
    InitializeCustomer = '[Customer] Initialize Customer',
    CreateCustomer = '[Customer] Create Customer',
    CreateCustomerSuccess = '[Customer] Create Customer Success',
    CreateCustomerFail = '[Customer] Create Customer Fail'
}

export class SetCustomer implements Action {
    readonly type = CustomerActionTypes.SetCustomer;
    constructor(public payload: Customer) { }
}

export class SetQuoteId implements Action {
    readonly type = CustomerActionTypes.SetQuoteId;
    constructor(public payload: string) { }
}

export class SetCustomerId implements Action {
    readonly type = CustomerActionTypes.SetCustomerId;
    constructor(public payload: string) { }
}

export class ClearCustomer implements Action {
    readonly type = CustomerActionTypes.ClearCustomer;
}

export class InitializeCustomer implements Action {
    readonly type = CustomerActionTypes.InitializeCustomer;
}

export class CreateCustomer implements Action {
    readonly type = CustomerActionTypes.CreateCustomer;

    constructor(public payload: Customer) { }
}

export class CreateCustomerSuccess implements Action {
    readonly type = CustomerActionTypes.CreateCustomerSuccess;

    constructor(public payload: Customer) { }
}

export class CreateCustomerFail implements Action {
    readonly type = CustomerActionTypes.CreateCustomerFail;

    constructor(public payload: string) { }
}

export type CustomerActions = SetCustomer
    | SetQuoteId
    | SetCustomerId
    | ClearCustomer
    | InitializeCustomer
    | CreateCustomer
    | CreateCustomerSuccess
    | CreateCustomerFail;
import { Action } from '@ngrx/store';
import { Policy } from 'src/app/models/policy.model';

export enum PolicyActionTypes {
    SetPolicy = '[Policy] Set Policy',
    ClearPolicy = '[Policy] Clear Issue Policy',
    InitializePolicy = '[Policy] Initialize Policy',
    CreatePolicy = '[Policy] Create Policy',
    CreatePolicySuccess = '[Policy] Create Policy Success',
    CreatePolicyFail = '[Policy] Create Policy Fail',
    SetQuoteId = '[Quote] Set Quote Id'
}

export class SetPolicy implements Action {
    readonly type = PolicyActionTypes.SetPolicy;
    constructor(public payload: Policy) {}
}

export class ClearPolicy implements Action {
    readonly type = PolicyActionTypes.ClearPolicy;
}

export class InitializePolicy implements Action {
    readonly type = PolicyActionTypes.InitializePolicy;
}

export class CreatePolicy implements Action {
    readonly type = PolicyActionTypes.CreatePolicy;

    constructor(public payload: Policy) { }
}

export class CreatePolicySuccess implements Action {
    readonly type = PolicyActionTypes.CreatePolicySuccess;

    constructor(public payload: Policy) { }
}

export class CreatePolicyFail implements Action {
    readonly type = PolicyActionTypes.CreatePolicyFail;

    constructor(public payload: string) { }
}

export class SetQuoteId implements Action {
    readonly type = PolicyActionTypes.SetQuoteId;

    constructor(public payload: string) { }
}

export type PolicyActions = SetPolicy
 | ClearPolicy 
 | InitializePolicy
 | CreatePolicy
 | CreatePolicySuccess
 | CreatePolicyFail
 | SetQuoteId;
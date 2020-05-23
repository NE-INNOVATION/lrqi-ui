import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CustomerService } from '../../services/customer.service';
import * as customerActions from './customer.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Customer } from '../../models/customer.model';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class CustomerEffects {
    constructor(private actions$: Actions,
        private customerService: CustomerService) { }

    @Effect()
    createCustomer$: Observable<Action> = this.actions$.pipe(
        ofType(customerActions.CustomerActionTypes.CreateCustomer),
        map((action: customerActions.CreateCustomer) => action.payload),
        mergeMap((customer: Customer) =>
            this.customerService.createCustomer(customer).pipe(
                map(newCustomer => (new customerActions.CreateCustomerSuccess(newCustomer))),
                catchError(err => of(new customerActions.CreateCustomerFail(err)))
            )
        )
    );

}
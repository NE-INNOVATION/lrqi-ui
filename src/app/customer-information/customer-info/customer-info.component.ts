import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';
import { Store, select } from '@ngrx/store';

import * as fromCustomer from '../state/customer.reducer';
import * as customerActions from '../state/customer.actions';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;

  constructor(
    private _router: Router,
    private _customerService: CustomerService,
    private _store: Store<fromCustomer.State>) { }

  ngOnInit() {
    // TODO - Unsubscribe
    this._store.pipe(select(fromCustomer.getCustomer)).subscribe(
      customer => { 
        this.customer = customer ? customer: new Customer();
       }
    );
  }

  save() {
    this._store.dispatch(new customerActions.SetCustomer(this.customer));
    this._customerService.saveCustomerInfo(this.customer).subscribe((data) => {
      this.navigate('vehicle');
    })
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromCustomer from '../state/customer.reducer';
import * as customerActions from '../state/customer.actions';


@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit, OnDestroy {

  customer: Customer | null;
  componentActive = true;
  customerForm: FormGroup;

  constructor(
    private _router: Router,
    private _store: Store<fromCustomer.State>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      stAddr: ['', Validators.required],
      apt: ['', Validators.required],
      zipCode: ['', Validators.required]
    });
    // TODO - Unsubscribe
    this._store.pipe(
      select(fromCustomer.getCustomer),
      takeWhile(() => this.componentActive)
    ).subscribe( customer => this.setCustomer(customer) );
  }

  setCustomer(customer: Customer | null): void {
    this.customer = customer;

    if (this.customer) {
      // Reset the form back to pristine
      this.customerForm.reset();

      // Display the appropriate page title
      if (this.customer.id === '') {
      } else {
      }

      // Update the data on the form
      this.customerForm.patchValue({
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        dob: this.customer.dob,
        stAddr: this.customer.stAddr,
        apt: this.customer.apt,
        zipCode: this.customer.zipCode
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  saveCustomer() {
    if(this.customerForm.valid){
      if(this.customerForm.dirty){
        const c = {...this.customer, ...this.customerForm.value, dob: this.customerForm.get('dob').value.format('YYYY-MM-DD')};
        if (c.id === '') {
          this._store.dispatch(new customerActions.CreateCustomer(c));
          this.navigate('vehicle');
        } else {
          //Update Customer: hasn't been built yet
          //this._store.dispatch(new customerActions.CreateCustomer(this.customer));
          this.navigate('vehicle');
        }
      }
    }else{
      // display error message
    }
    
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

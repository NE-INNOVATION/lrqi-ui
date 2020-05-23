import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../../models/policy.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromPolicy from '../state/issue.reducer';
import * as policyActions from '../state/issue.actions';
import * as fromCustomer from '../../customer-information/state/customer.reducer';
@Component({
  selector: 'app-policy-info',
  templateUrl: './policy-info.component.html',
  styleUrls: ['./policy-info.component.css']
})
export class PolicyInfoComponent implements OnInit, OnDestroy {

  policy: Policy;
  policyForm: FormGroup;
  componentActive = true;

  constructor(
    private _router: Router,
    private _store: Store<fromPolicy.State>,
    private fb: FormBuilder
    ) { }

  ngOnInit() {
    this.policyForm = this.fb.group({
      confirmEmail: ['', Validators.required],
      confirmContactNum: ['', Validators.required],
      bankName: ['', Validators.required],
      accountNum: ['', Validators.required]
    })

    this._store.pipe(
      select(fromPolicy.getPolicy),
      takeWhile(() => this.componentActive)
    ).subscribe(policy => this.setPolicy(policy));

    this._store.pipe(
      select(fromCustomer.getCustomer),
      takeWhile(() => this.componentActive)
    ).subscribe(customer => {
      console.log('Updating policy quote id', customer);
      this._store.dispatch(new policyActions.SetQuoteId(customer.quoteId))
    });
  }

  setPolicy(policy: Policy | null): void {
    this.policy = policy;

    if (this.policy) {
      // Reset the form back to pristine
      this.policyForm.reset();

      // Display the appropriate page title
      if (this.policy.id === '') {
      } else {
      }

      // Update the data on the form
      this.policyForm.patchValue({
        confirmEmail: this.policy.confirmEmail,
        confirmContactNum: this.policy.confirmContactNum,
        bankName: this.policy.bankName,
        accountNum: this.policy.accountNum
      });
    }
  }

  savePolicy() {
    if (this.policyForm.valid) {
      if (this.policyForm.dirty) {
        const c = { ...this.policy, ...this.policyForm.value};
        if (c.id === '') {
          this._store.dispatch(new policyActions.CreatePolicy(c));
        } else {
          //Update Policy: hasn't been built yet
        }
      }
    } else {
      // display error message
    }

  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }

}

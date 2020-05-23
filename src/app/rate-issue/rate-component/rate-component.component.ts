import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coverage } from '../../models/coverage.model';
import { RateService } from '../../services/rate.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromCoverage from '../state/coverages.reducer';
import * as coverageActions from '../state/coverages.actions';
import * as fromCustomer from '../../customer-information/state/customer.reducer';

@Component({
  selector: 'app-rate-component',
  templateUrl: './rate-component.component.html',
  styleUrls: ['./rate-component.component.css']
})
export class RateComponent implements OnInit {

  coverage: Coverage;
  action: string;
  componentActive = true;
  coverageForm: FormGroup;

  constructor(
    private _router: Router,
    private _store: Store<fromCoverage.State>,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.action = 'RATE';
    this.coverageForm = this.fb.group({
      bi: ['', Validators.required],
      pd: ['', Validators.required],
      med: ['', Validators.required],
      comp: ['', Validators.required],
      col: ['', Validators.required],
      rerim: ['', Validators.required]
    });

    this._store.pipe(
      select(fromCoverage.getCoverage),
      takeWhile(() => this.componentActive)
    ).subscribe(coverage => this.setCoverage(coverage));

    this._store.pipe(
      select(fromCustomer.getCustomer),
      takeWhile(() => this.componentActive)
    ).subscribe(customer => {
      console.log('Updating coverage quote id', customer);
      this._store.dispatch(new coverageActions.SetQuoteId(customer.quoteId))
    });
  }

  disableFirst() {
    return this.coverageForm.value.bi == '' || this.coverageForm.value.pd == '' || this.coverageForm.value.med == '';
  }

  disableRate() {
    return this.coverageForm.value.comp == '' || this.coverageForm.value.col == '' || this.coverageForm.value.rerim == '';
  }


  setCoverage(coverage: Coverage | null): void {
    this.coverage = coverage;

    if (this.coverage) {
      // Reset the form back to pristine
      this.coverageForm.reset();

      // Display the appropriate page title
      if (this.coverage.id === '') {
      } else {
      }

      // Update the data on the form
      this.coverageForm.patchValue({
        bi: this.coverage.bi,
        pd: this.coverage.pd,
        med: this.coverage.med,
        comp: this.coverage.comp,
        col: this.coverage.col,
        rerim: this.coverage.rerim
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  saveCoverage() {
    if (this.coverageForm.valid) {
      if (this.coverageForm.dirty) {
        const c = { ...this.coverage, ...this.coverageForm.value};
        if (c.id === '') {
          this._store.dispatch(new coverageActions.CreateCoverage(c));
        } else {
          //Update Coverage: hasn't been built yet
        }
      }
    } else {
      // display error message
    }

  }

  navigate(val: string) {
    this._router.navigate([val]);
  }

}

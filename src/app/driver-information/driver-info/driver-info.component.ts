import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Driver } from "../../models/driver.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { takeWhile } from "rxjs/operators";

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromDriver from "../state/drivers.reducer";
import * as driverActions from "../state/driver.actions";
import * as fromCustomer from "../../customer-information/state/customer.reducer";

@Component({
  selector: "app-driver-info",
  templateUrl: "./driver-info.component.html",
  styleUrls: ["./driver-info.component.css"],
})
export class DriverInfoComponent implements OnInit, OnDestroy {
  driver: Driver;
  componentActive = true;
  driverForm: FormGroup;

  constructor(
    private _router: Router,
    private _store: Store<fromDriver.State>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.driverForm = this.fb.group({
      name: ["", Validators.required],
      gender: ["", Validators.required],
      maritalStatus: ["", Validators.required],
      licenseNum: ["", Validators.required],
      employmentStatus: ["", Validators.required],
      currentIns: ["", Validators.required],
      licensedDt: ["", Validators.required],
      education: ["", Validators.required],
    });

    this._store
      .pipe(
        select(fromDriver.getCurentDriver),
        takeWhile(() => this.componentActive)
      )
      .subscribe((driver) => this.setDriver(driver));

    this._store
      .pipe(
        select(fromCustomer.getCustomer),
        takeWhile(() => this.componentActive)
      )
      .subscribe((customer) => {
        console.log("Updating driver quote id", customer);
        this._store.dispatch(new driverActions.SetQuoteId(customer.quoteId));
      });
  }

  setDriver(driver: Driver | null): void {
    this.driver = driver;

    if (this.driver) {
      // Reset the form back to pristine
      this.driverForm.reset();

      // Display the appropriate page title
      if (this.driver.id === "") {
      } else {
      }

      // Update the data on the form
      this.driverForm.patchValue({
        name: this.driver.name,
        gender: this.driver.gender,
        maritalStatus: this.driver.maritalStatus,
        licenseNum: this.driver.licenseNum,
        employmentStatus: this.driver.employmentStatus,
        currentIns: this.driver.currentIns,
        licensedDt: this.driver.licensedDt,
        education: this.driver.education,
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  saveDriver() {
    if (this.driverForm.valid) {
      if (this.driverForm.dirty) {
        const c = {
          ...this.driver,
          ...this.driverForm.value,
          licensedDt: this.driverForm
            .get("licensedDt")
            .value.format("YYYY-MM-DD"),
        };
        if (c.id === "") {
          this._store.dispatch(new driverActions.CreateDriver(c));
          this.navigate("incident");
        } else {
          //Update Vehicle: hasn't been built yet
          this.navigate("incident");
        }
      }
    } else {
      // display error message
    }
  }

  navigate(val: string) {
    console.log("Navigating to ", val);
    this._router.navigate([val]);
  }
}

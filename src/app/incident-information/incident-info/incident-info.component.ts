import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Incident } from "../../models/incident.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { takeWhile } from "rxjs/operators";

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromIncident from "../state/incidents.reducer";
import * as fromDriver from "../../driver-information/state/drivers.reducer";
import * as incidentActions from "../state/incident.actions";
import * as fromCustomer from "../../customer-information/state/customer.reducer";
import { Driver } from "src/app/models/driver.model";

@Component({
  selector: "app-incident-info",
  templateUrl: "./incident-info.component.html",
  styleUrls: ["./incident-info.component.css"],
})
export class IncidentInfoComponent implements OnInit, OnDestroy {
  incident: Incident;
  drivers: Driver[];
  componentActive = true;
  incidentForm: FormGroup;

  constructor(
    private _router: Router,
    private _store: Store<fromIncident.State>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.incidentForm = this.fb.group({
      category: ["", Validators.required],
      driver: ["", Validators.required],
      responsible: ["", Validators.required],
      when: ["", Validators.required],
    });

    this._store
      .pipe(
        select(fromIncident.getCurentIncident),
        takeWhile(() => this.componentActive)
      )
      .subscribe((incident) => this.setIncident(incident));

    this._store
      .pipe(
        select(fromDriver.getCurrentDriverName),
        takeWhile(() => this.componentActive)
      )
      .subscribe((driver) => this.setDrivers(driver));

    this._store
      .pipe(
        select(fromCustomer.getCustomer),
        takeWhile(() => this.componentActive)
      )
      .subscribe((customer) => {
        console.log("Updating incident quote id", customer);
        this._store.dispatch(new incidentActions.SetQuoteId(customer.quoteId));
      });
  }

  setDrivers(drivers: Driver[]) {
    this.drivers = drivers;
  }

  setIncident(incident: Incident | null): void {
    this.incident = incident;

    if (this.incident) {
      // Reset the form back to pristine
      this.incidentForm.reset();

      // Update the data on the form
      this.incidentForm.patchValue({
        category: this.incident.category,
        driver: this.incident.driver,
        responsible: this.incident.responsible,
        when: this.incident.when,
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  saveIncident() {
    if (this.incidentForm.valid) {
      if (this.incidentForm.dirty) {
        const c = {
          ...this.incident,
          ...this.incidentForm.value,
          when: this.incidentForm.get("when").value.format("YYYY-MM-DD"),
        };

        this._store.dispatch(new incidentActions.CreateIncident(c));
        this.navigate("rate");
      }
    } else {
      // display error message
    }
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }
}

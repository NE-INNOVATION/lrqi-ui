import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Customer } from "../../models/customer.model";
import { environment } from "../../../environments/environment";
import { takeWhile } from "rxjs/operators";

/* NgRx */
import { Store, select } from "@ngrx/store";
import * as fromCustomer from "../state/customer.reducer";
import * as customerActions from "../state/customer.actions";
// import { OktaAuthService } from "@okta/okta-angular";

@Component({
  selector: "app-customer-info",
  templateUrl: "./customer-info.component.html",
  styleUrls: ["./customer-info.component.css"],
})
export class CustomerInfoComponent implements OnInit, OnDestroy {
  customer: Customer | null;
  componentActive = true;
  customerForm: FormGroup;
  // userName: string;
  // isAuthenticated: boolean;

  constructor(
    private _router: Router,
    private _store: Store<fromCustomer.State>,
    private fb: FormBuilder //public oktaAuth: OktaAuthService
  ) {
    // this.oktaAuth.$authenticationState.subscribe(
    //   (isAuthenticated) => (this.isAuthenticated = isAuthenticated)
    // );
  }

  // login() {
  //   this.oktaAuth.loginRedirect("/home");
  // }

  async ngOnInit() {
    console.log("GATEWAY URL IS ", environment.gatewayUrl);
    // this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    // if (this.isAuthenticated) {
    //   const userClaims = await this.oktaAuth.getUser();
    //   this.userName = userClaims.name;
    // }
    this.customerForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      dob: ["", Validators.required],
      stAddr: ["", Validators.required],
      apt: ["", Validators.required],
      zipCode: ["", Validators.required],
    });
    // TODO - Unsubscribe
    this._store
      .pipe(
        select(fromCustomer.getCustomer),
        takeWhile(() => this.componentActive)
      )
      .subscribe((customer) => this.setCustomer(customer));
  }

  setCustomer(customer: Customer | null): void {
    this.customer = customer;

    if (this.customer) {
      // Reset the form back to pristine
      this.customerForm.reset();

      // Update the data on the form
      this.customerForm.patchValue({
        firstName: this.customer.firstName,
        lastName: this.customer.lastName,
        dob: this.customer.dob,
        stAddr: this.customer.stAddr,
        apt: this.customer.apt,
        zipCode: this.customer.zipCode,
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  saveCustomer() {
    if (this.customerForm.valid) {
      if (this.customerForm.dirty) {
        const c = {
          ...this.customer,
          ...this.customerForm.value,
          dob: this.customerForm.get("dob").value.format("YYYY-MM-DD"),
        };
        if (c.quoteId === "") {
          this._store.dispatch(new customerActions.CreateCustomer(c));
          this.navigate("vehicle");
        } else {
          //Update Customer: hasn't been built yet
          //this._store.dispatch(new customerActions.CreateCustomer(this.customer));
          this.navigate("vehicle");
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

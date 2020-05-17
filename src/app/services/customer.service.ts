import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class CustomerService {
  customer: Customer;

  constructor(private _service: CommonService) { }

  saveCustomerInfo(customer: Customer) : Observable<any>{
    return this._service.post(environment.gatewayUrl + 
      '/customer', customer)
      .pipe( map(res => {
        this.customer = customer;
        this.customer.id = res.crn;
        this.customer.quoteId = res.quoteid;
      }));
  }

  getQuoteId(): string {
    return this.customer.quoteId;
  }
}
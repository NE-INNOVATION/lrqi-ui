import { Injectable } from "@angular/core";
import { Customer } from "../models/customer.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class CustomerService {

  constructor(private _service: CommonService) { }

  createCustomer(customer: Customer) : Observable<any>{
    return this._service.post(`${environment.gatewayUrl}/api/customers/customerInfo/${customer.id || 0}`, customer)
      .pipe( 
        tap(data => console.log('createCustomer:' + JSON.stringify(data))),
        map(data => {
          return {
            ...customer,
            id: data.crn,
            quoteId: data.quoteid
          }
        }),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
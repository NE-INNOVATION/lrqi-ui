import { Injectable } from "@angular/core";
import { Policy } from "../models/policy.model";
import { CommonService } from "./common.service";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class PolicyService {

  constructor(private _service: CommonService) { }

  createPolicy(policy: Policy): Observable<any> {
    return this._service.post(environment.gatewayUrl +
      '/issue/' + policy.quoteId, policy)
      .pipe(tap(data => console.log('createPolicy:' + JSON.stringify(data))),
        map(data => {
          return {
            ...policy,
            id: data.policyId,
            policyNumber: data.policyNumber
          }
        }),
        catchError(this.handleError));
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
import { Injectable } from "@angular/core";
import { Coverage } from "../models/coverage.model";
import { Observable, throwError } from "rxjs";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class RateService {
  coverage: Coverage;

  constructor(
    private _service: CommonService) { }

  createCoverage(coverage: Coverage): Observable<any> {
    return this._service.post(environment.gatewayUrl +
      '/rate/' + coverage.quoteId, coverage)
      .pipe(
        tap(data => console.log('createCoverage:' + JSON.stringify(data))),
        map(data => {
          return {
            ...coverage,
            id: data.coverageId,
            premium: data.premium
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
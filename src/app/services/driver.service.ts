import { Injectable } from "@angular/core";
import { Driver } from "../models/driver.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { map, tap, catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable()
export class DriverService {

  constructor(
    private _service: CommonService) { }

  createDriver(driver: Driver) : Observable<any> {
    return this._service.post(`${environment.gatewayUrl}/api/drivers/driverInfo/${driver.id || 0}/${driver.quoteId}`, driver)
      .pipe( tap(data => console.log('createDriver:' + JSON.stringify(data))),
      map(data => {
        return {
          ...driver,
          id: data.result
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
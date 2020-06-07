import { Injectable } from "@angular/core";
import { Incident } from "../models/incident.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { Observable, throwError } from "rxjs";
import { map, tap, catchError } from "rxjs/operators";

@Injectable()
export class IncidentService {

  constructor(
    private _service: CommonService) { }

  createIncident(incident: Incident): Observable<any> {
    return this._service.post(`${environment.gatewayUrl}/api/incidents/incidentInfo/${incident.id || 0}/${incident.quoteId}`, incident).pipe(
        tap(data => console.log('createIncident:' + JSON.stringify(data))),
        map(data => {
          return {
            ...incident,
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
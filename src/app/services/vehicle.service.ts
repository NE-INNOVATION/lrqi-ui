import { Injectable } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { Observable, from, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { CommonService } from "./common.service";
import { map, tap, flatMap, catchError } from "rxjs/operators";
import { CustomerService } from '../services/customer.service';
import { Make } from '../models/make.model';
import { HttpClient } from '@angular/common/http';
import { Model } from '../models/model.model';

@Injectable()
export class VehicleService {
  private _makeURL = 'assets/make.json';
  private _modelURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId'; //440?format=json
  
  constructor(
    private _service: CommonService, 
    private http: HttpClient) { }

  createVehicle(vehicle: Vehicle)  : Observable<any> {
    return this._service.post(environment.gatewayUrl + 
      '/vehicle/' + vehicle.quoteId, vehicle)
      .pipe( 
        tap(data => console.log('createVehicle:' + JSON.stringify(data))),
        map(data => {
          return {
            ...vehicle,
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

  getAllMake(): Observable<Make[]> {
    return this.http.get<Make[]>(this._makeURL);
  }

  getModels(make: string): Observable<Model[]> {
    return this.http.get<any>(`${this._modelURL}/${make}?format=json`).pipe(
      map(x => x.Results)
    )
  }

}
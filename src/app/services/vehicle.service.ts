import { Injectable } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { Observable, from, throwError, of } from "rxjs";
import { environment } from "../../environments/environment";
import { CommonService } from "./common.service";
import { map, tap, flatMap, catchError } from "rxjs/operators";
import { Make } from "../models/make.model";
import { HttpClient } from "@angular/common/http";
import { Model } from "../models/model.model";

@Injectable()
export class VehicleService {
  private _makeURL = "assets/make.json";
  private _modelURL =
    "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId"; //440?format=json
  private models = [
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1684,
      Model_Name: "V8 Vantage",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1686,
      Model_Name: "DBS",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1687,
      Model_Name: "DB9",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1688,
      Model_Name: "Rapide",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1695,
      Model_Name: "V12 Vantage",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1697,
      Model_Name: "Virage",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 1701,
      Model_Name: "Vanquish",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 13751,
      Model_Name: "DB11",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 14157,
      Model_Name: "Lagonda",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 14162,
      Model_Name: "Vantiage",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 14164,
      Model_Name: "V8",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 19609,
      Model_Name: "Vanquish S",
    },
    {
      Make_ID: 440,
      Make_Name: "Aston Martin",
      Model_ID: 19610,
      Model_Name: "Vanquish Zagato",
    },
  ];

  constructor(private _service: CommonService, private http: HttpClient) {}

  createVehicle(vehicle: Vehicle): Observable<any> {
    return this._service
      .post(
        `${environment.gatewayUrl}/api/vehicles/vehicleInfo/${vehicle.quoteId}`,
        vehicle
      )
      .pipe(
        tap((data) => console.log("createVehicle:" + JSON.stringify(data))),
        map(() => {
          return vehicle;
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

  getAllMake(): Observable<Make[]> {
    return this.http.get<Make[]>(this._makeURL);
  }

  getModels(make: string): Observable<Model[]> {
    return this.http.get<any>(`${this._modelURL}/${make}?format=json`).pipe(
      catchError((err) => of(this.models)),
      map((x) => x.Results)
    );
  }
}

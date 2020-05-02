import { Injectable } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { Observable, from } from "rxjs";
import { environment } from "../../environments/environment";
import { CommonService } from "./common.service";
import { map, tap, flatMap } from "rxjs/operators";
import { CustomerService } from '../services/customer.service';
import { Make } from '../models/make.model';
import { HttpClient } from '@angular/common/http';
import { Model } from '../models/model.model';

@Injectable()
export class VehicleService {
  vehicle: Vehicle;
  private _makeURL = 'assets/make.json';
  private _modelURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId'; //440?format=json
  
  constructor(
    private _service: CommonService, 
    private _customerService: CustomerService,
    private http: HttpClient) { 
      
    }

  saveVehicleInfo(vehicle: Vehicle)  : Observable<any> {
    let quoteid = this._customerService.getQuoteId();
    return this._service.post(environment.gatewayUrl + 
      '/vehicle/' + quoteid, vehicle)
      .pipe( map(res => {
        this.vehicle = vehicle;
        this.vehicle.id = res.result;
        this.vehicle.quoteId = quoteid;
      }));
  }

  getVehicleInfo(): Vehicle {
    if (this.vehicle !== undefined) {
      return this.vehicle;
    }else {
      return new Vehicle();
    }
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
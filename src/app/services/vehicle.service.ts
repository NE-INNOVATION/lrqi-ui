import { Injectable } from "@angular/core";
import { Vehicle } from "../models/vehicle.model";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { CommonService } from "./common.service";
import { map } from "rxjs/operators";
import { CustomerService } from '../services/customer.service';

@Injectable()
export class VehicleService {
  vehicle: Vehicle;
  
  constructor(
    private _service: CommonService, 
    private _customerService: CustomerService) { }

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
}
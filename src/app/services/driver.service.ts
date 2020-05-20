import { Injectable } from "@angular/core";
import { Driver } from "../models/driver.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { CustomerService } from "./customer.service";

@Injectable()
export class DriverService {
  driver: Driver;

  constructor(
    private _service: CommonService,
    private _customerService: CustomerService) { }

  saveDriverInfo(driver: Driver) : Observable<any> {
    let quoteId = '';//this._customerService.getQuoteId();
    return this._service.post(environment.gatewayUrl + 
      '/driver/' + quoteId, driver)
      .pipe( map(res => {
        this.driver = driver;
        this.driver.id = res.result;
        this.driver.quoteId = quoteId;
      }));
  }

  getDriverInfo(): Driver {
    if (this.driver !== undefined) {
      return this.driver;
    }else {
      return new Driver();
    }
  }
}
import { Injectable } from "@angular/core";
import { Incident } from "../models/incident.model";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CustomerService } from "./customer.service";

@Injectable()
export class IncidentService {
  incident: Incident;

  constructor(
    private _service: CommonService,
    private _customerService: CustomerService) { }

  saveIncidentInfo(incident: Incident) : Observable<any> {
    let quoteId = ''//this._customerService.getQuoteId();
    return this._service.post(environment.gatewayUrl + 
      '/incident/' + quoteId, incident).pipe( map(res =>  {
      this.incident = incident;
      this.incident.id = res.result;
      this.incident.quoteId = quoteId;
    }));
  }

  getIncidentInfo(): Incident {
    if (this.incident !== undefined) {
      return this.incident;
    }else {
      return new Incident();
    }
  }
}
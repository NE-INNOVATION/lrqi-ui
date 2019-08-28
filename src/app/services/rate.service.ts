import { Injectable } from "@angular/core";
import { Coverage } from "../models/coverage.model";
import { Observable } from "rxjs";
import { CommonService } from "./common.service";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { CustomerService } from "./customer.service";

@Injectable()
export class RateService {
  coverage: Coverage;

  constructor(
    private _service: CommonService,
    private _customerService: CustomerService) { }

  saveCoverageInfo(coverage: Coverage) : Observable<any> {
    let quoteId = this._customerService.getQuoteId();
    return this._service.post(environment.gatewayUrl + 
      '/rate/' + quoteId, coverage)
      .pipe( map(res => {
        this.coverage = coverage;
        this.coverage.id = res.coverageId;
        this.coverage.quoteId = quoteId;
        this.coverage.premium = res.premium;
      }));
  }

  getCoverageInfo(): Coverage {
    if (this.coverage !== undefined) {
      console.log('returning coverage', this.coverage)
      return this.coverage;
    }else {
      return new Coverage();
    }
  }
}
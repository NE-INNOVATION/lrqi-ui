import { Injectable } from "@angular/core";
import { Policy } from "../models/policy.model";
import { CommonService } from "./common.service";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators";
import { CustomerService } from "./customer.service";

@Injectable()
export class PolicyService {
  policy: Policy;

  constructor(
    private _service: CommonService,
    private _customerService: CustomerService
  ) { }

  savePolicyInfo(policy: Policy) : Observable<any> {
    let quoteId = ''//this._customerService.getQuoteId();
    return this._service.post(environment.gatewayUrl + 
      '/issue/' + quoteId, policy)
      .pipe( map(res => {
        this.policy = policy;
        this.policy.quoteId = quoteId;
        this.policy.id = res.policyId;
        this.policy.policyNumber = res.policyNumber;
      }));
  }

  getPolicyInfo(): Policy {
    if (this.policy !== undefined) {
      return this.policy;
    }else {
      return new Policy();
    }
  }
}
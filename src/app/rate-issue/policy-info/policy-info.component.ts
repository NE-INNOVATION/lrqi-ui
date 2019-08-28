import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Policy } from '../../models/policy.model';
import { PolicyService } from '../../services/policy.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-policy-info',
  templateUrl: './policy-info.component.html',
  styleUrls: ['./policy-info.component.css']
})
export class PolicyInfoComponent implements OnInit {

  policy: Policy;
  policyForm: FormGroup;

  constructor(
    private _router: Router,
    private _policyService: PolicyService ) { }

  ngOnInit() {
    this.policy = this._policyService.getPolicyInfo();
    this.policyForm = new FormGroup({
      confirmEmail: new FormControl(this.policy.confirmEmail , [Validators.required]),
      confirmContactNum: new FormControl(this.policy.confirmContactNum, [Validators.required]),
      bankName: new FormControl(this.policy.bankName, [Validators.required]),
      accountNum: new FormControl(this.policy.accountNum, [Validators.required])
    })

    this.policyForm.valueChanges.subscribe( val => {
      this.policy.confirmEmail = val.confirmEmail;
      this.policy.confirmContactNum = val.confirmContactNum;
      this.policy.bankName = val.bankName;
      this.policy.accountNum = val.accountNum;
    })
  }

  save() {
    this._policyService.savePolicyInfo(this.policy).subscribe((data) => {
      this.navigate('policy');  
    })
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }

}

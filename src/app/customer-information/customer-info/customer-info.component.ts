import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer.model';
import { CommonService } from '../../services/common.service';
import { CustomerService } from '../../services/customer.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  customer: Customer;

  constructor(
    private _router: Router, 
    private _customerService: CustomerService) {}

  ngOnInit() {
    this.customer = this._customerService.getCustomerInfo()
  }

  save() {
    this._customerService.saveCustomerInfo(this.customer).subscribe((data) => {
      this.navigate('vehicle');  
    })
  }

  navigate(val: string){
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

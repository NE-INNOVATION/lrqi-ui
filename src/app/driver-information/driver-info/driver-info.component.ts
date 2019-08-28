import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../../models/driver.model';
import { CommonService } from '../../services/common.service';
import { DriverService } from '../../services/driver.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {

  driver: Driver;

  constructor(
    private _router: Router,
    private _service: CommonService,
    private _driverService: DriverService) { }

  ngOnInit() {
    this.driver = this._driverService.getDriverInfo()
  }

  save() {
        // use bottom notification from material design for updates on data operations
    this._driverService.saveDriverInfo(this.driver).subscribe((data) => {
      this.navigate('incident');  
    })
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

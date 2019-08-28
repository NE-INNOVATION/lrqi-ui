import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  vehicle: Vehicle;

  constructor(
    private _router: Router,
    private _vehicleService: VehicleService) { }

  ngOnInit() {
    this.vehicle = this._vehicleService.getVehicleInfo();
  }

  save() {
    this._vehicleService.saveVehicleInfo(this.vehicle).subscribe((data) => {
      this.navigate('driver');  
    })
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

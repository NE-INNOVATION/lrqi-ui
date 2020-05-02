import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { Make } from 'src/app/models/make.model';
import { Observable } from 'rxjs';
import { Model } from 'src/app/models/model.model';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  vehicle: Vehicle;
  makes: Make[];
  models: Model[];

  constructor(
    private _router: Router,
    private _vehicleService: VehicleService) {
    this._vehicleService.getAllMake().subscribe(data => {
      this.makes = data;
    })
  }

  ngOnInit() {
    this.vehicle = this._vehicleService.getVehicleInfo();
  }
  
  loadModels(){
    this._vehicleService.getModels(this.vehicle.make).subscribe(data => {
      this.models = data.map(x => {
        return {
          Model_ID: x.Model_ID,
          Model_Name: x.Model_Name
        }
      })
    })
  }

  save() {
    this._vehicleService.saveVehicleInfo(this.vehicle).subscribe((data) => {
      this.navigate('driver');
    })
  }

  getModelName(): string{
    if(this.models && this.vehicle.model){
      return this.models.filter(x => x.Model_ID == this.vehicle.model)[0].Model_Name;
    }
    return '';
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { Make } from 'src/app/models/make.model';
import { Model } from 'src/app/models/model.model';

import { takeWhile } from 'rxjs/operators';

/* NgRx */
import { Store, select } from '@ngrx/store';
import * as fromVehicle from '../state/vehicles.reducer';
import * as vehicleActions from '../state/vehicle.actions';
import * as fromCustomer from '../../customer-information/state/customer.reducer';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit, OnDestroy {

  vehicle: Vehicle;
  componentActive = true;
  vehicleForm: FormGroup;
  makes: Make[];
  models: Model[] = [
    {
      Model_ID: 'some-id',
      Model_Name: 'some-name'
    }
  ];

  constructor(
    private _router: Router,
    private _store: Store<fromVehicle.State>,
    private fb: FormBuilder,
    private _vehicleService: VehicleService) {
    this._vehicleService.getAllMake().subscribe(data => {
      this.makes = data;
    })
  }

  ngOnInit() {
    this.vehicleForm = this.fb.group({
      year: ['', Validators.required],
      make: ['', Validators.required],
      model: ['', Validators.required],
      vehicleOwned: ['', Validators.required],
      vehicleUsage: ['', Validators.required],
      daysDriven: [''],
      milesDriven: [''],
      vehiclePrimaryUse: [''],
      annualMileage: ['', Validators.required]
    });
    // TODO - Unsubscribe
    this._store.pipe(
      select(fromVehicle.getCurentVehicle),
      takeWhile(() => this.componentActive)
    ).subscribe(vehicle => this.setVehicle(vehicle));

    this._store.pipe(
      select(fromCustomer.getCustomer),
      takeWhile(() => this.componentActive)
    ).subscribe( customer => {
      console.log('Updating vehicle quote id', customer);
      this._store.dispatch(new vehicleActions.SetQuoteId(customer.quoteId))
    } );
  }

  setVehicle(vehicle: Vehicle | null): void {
    this.vehicle = vehicle;

    if (this.vehicle) {
      // Reset the form back to pristine
      this.vehicleForm.reset();

      // Display the appropriate page title
      if (this.vehicle.id === '') {
      } else {
      }

      // Update the data on the form
      this.vehicleForm.patchValue({
        year: this.vehicle.year,
        make: this.vehicle.make,
        model: this.vehicle.model,
        vehicleOwned: this.vehicle.vehicleOwned,
        vehicleUsage: this.vehicle.vehicleUsage,
        daysDriven: this.vehicle.daysDriven,
        milesDriven: this.vehicle.milesDriven,
        vehiclePrimaryUse: this.vehicle.vehiclePrimaryUse,
        annualMileage: this.vehicle.annualMileage
      });
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  loadModels(make: string) {
    this._vehicleService.getModels(make).subscribe(data => {
      // this.models = data.map(x => {
      //   return {
      //     Model_ID: x.Model_ID,
      //     Model_Name: x.Model_Name
      //   }
      // })
    })
  }

  saveVehicle() {
    if(this.vehicleForm.valid){
      if(this.vehicleForm.dirty){
        const c = {...this.vehicle, ...this.vehicleForm.value};
        if (c.id === '') {
          this._store.dispatch(new vehicleActions.CreateVehicle(c));
          this.navigate('driver');
        } else {
          //Update Vehicle: hasn't been built yet
          this.navigate('driver');
        }
      }
    }else{
      // display error message
    }
    
  }

  getModelName(): string {
    if (this.models && this.vehicle.model) {
      return this.models.filter(x => x.Model_ID == this.vehicle.model)[0].Model_Name;
    }
    return '';
  }

  navigate(val: string) {
    console.log('Navigating to ', val);
    this._router.navigate([val]);
  }

}

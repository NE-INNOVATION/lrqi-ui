import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  vin: string;
  make: string;
  model: string;
  year: string;
  mileage: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {vin: '111', make: '1', model: 'Hydrogen', year: '1.0079', mileage: 'H'},
  {vin: '111', make: '2', model: 'Helium', year: '4.0026', mileage: 'He'},
  {vin: '111', make: '3', model: 'Lithium', year: '6.941', mileage: 'Li'}
];

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  displayedColumns: string[] = ['vin', 'make', 'model', 'year', 'mileage'];
  dataSource = ELEMENT_DATA;

  constructor(private _router: Router) { }

  ngOnInit() {

  }

  navigate(val: string) {
    this._router.navigate([val]);
  }

  cellClicked(element) {
    console.log(element.vin + ' cell clicked');
  }


}

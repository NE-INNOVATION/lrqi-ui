import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }
}

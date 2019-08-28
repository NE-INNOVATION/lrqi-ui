import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incident-details',
  templateUrl: './incident-details.component.html',
  styleUrls: ['./incident-details.component.css']
})
export class IncidentDetailsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Incident } from '../../models/incident.model';
import { CommonService } from '../../services/common.service';
import { IncidentService } from '../../services/incident.service';
import { environment } from '../../../environments/environment';
import { Moment } from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-incident-info',
  templateUrl: './incident-info.component.html',
  styleUrls: ['./incident-info.component.css']
})
export class IncidentInfoComponent implements OnInit {

  incident: Incident;

  constructor(
    private _router: Router,
    private _service: CommonService,
    private _incidentService: IncidentService) { }

  ngOnInit() {
    this.incident = this._incidentService.getIncidentInfo();
  }

  save() {
    this._incidentService.saveIncidentInfo(this.incident).subscribe((data) => {
      this.navigate('rate');  
    })
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }
}

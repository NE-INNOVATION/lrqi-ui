import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coverage } from '../../models/coverage.model';
import { RateService } from '../../services/rate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rate-component',
  templateUrl: './rate-component.component.html',
  styleUrls: ['./rate-component.component.css']
})
export class RateComponent implements OnInit {

  coverage: Coverage;
  action: string;
  coverageForm: FormGroup;

  constructor(
    private _router: Router,
    private _rateService: RateService) { }

  ngOnInit() {
    this.coverage = this._rateService.getCoverageInfo();
    this.action = 'RATE';
    this.coverageForm = new FormGroup({
      bi: new FormControl(this.coverage.bi, [Validators.required]),
      pd: new FormControl(this.coverage.pd, [Validators.required]),
      med: new FormControl(this.coverage.med, [Validators.required]),
      comp: new FormControl(this.coverage.comp, [Validators.required]),
      col: new FormControl(this.coverage.col, [Validators.required]),
      rerim: new FormControl(this.coverage.rerim, [Validators.required])
    })

    this.coverageForm.valueChanges.subscribe( val => {
      this.coverage.bi = val.bi;
      this.coverage.pd = val.pd;
      this.coverage.med = val.med;
      this.coverage.comp = val.comp;
      this.coverage.col = val.col;
      this.coverage.rerim = val.rerim;

    })
  }

  disableFirst(){
    return this.coverage.bi == '' || this.coverage.pd == '' || this.coverage.med == '';
  }

  disableRate(){
    return this.coverage.comp == '' || this.coverage.col == '' || this.coverage.rerim == '';
  }

  save() {
    this._rateService.saveCoverageInfo(this.coverage).subscribe((data) => {
      this.setAction();
    })
  }

  private setAction() {
    switch (this.action) {
      case 'RATE':
        this.action = 'Continue to Purchase';
        break;
      case 'Continue to Purchase':
        this.navigate('policy');
        break;
    }
  }

  navigate(val: string) {
    this._router.navigate([val]);
  }

}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentInfoComponent } from './incident-info.component';

describe('IncidentInfoComponent', () => {
  let component: IncidentInfoComponent;
  let fixture: ComponentFixture<IncidentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

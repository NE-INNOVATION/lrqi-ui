import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material Modules
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

// Feature Modules
import { CustomerInformationModule } from './customer-information/customer-information.module';
import { VehicleInformationModule } from './vehicle-information/vehicle-information.module';
import { DriverInformationModule } from './driver-information/driver-information.module';
import { IncidentInformationModule } from './incident-information/incident-information.module';
import { RateIssueModule } from './rate-issue/rate-issue.module';
import { CommonService } from './services/common.service';
import { CustomerService } from './services/customer.service';
import { NavigationComponent } from './navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomerInformationModule,
    VehicleInformationModule,
    DriverInformationModule,
    IncidentInformationModule,
    RateIssueModule,
    MatMenuModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [CommonService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerInfoComponent } from "./customer-info/customer-info.component";
import { CustomerRoutingModule } from "./customer-routing-module";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatMomentDateModule } from "@angular/material-moment-adapter";

/* NgRx */
import { StoreModule } from "@ngrx/store";
import { reducer } from "./state/customer.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CustomerEffects } from "./state/customer.effects";

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatMomentDateModule,
    StoreModule.forFeature("customers", reducer),
    EffectsModule.forFeature([CustomerEffects]),
  ],
  declarations: [CustomerInfoComponent],
  exports: [CustomerInfoComponent],
})
export class CustomerInformationModule {}

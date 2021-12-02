import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablesComponent } from './observables.component';
import { ObservablesRoutingModule } from './observables-routing.module';



@NgModule({
  declarations: [
    ObservablesComponent
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule
  ]
})
export class ObservablesModule { }

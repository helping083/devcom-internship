import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { RxjsOperatorsRoutingModule } from './rxjs-operators.routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RxjsOperatorsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }

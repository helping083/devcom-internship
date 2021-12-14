import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { RxjsOperatorsRoutingModule } from './rxjs-operators.routing.module';



@NgModule({
  declarations: [
    RxjsOperatorsComponent
  ],
  imports: [
    CommonModule,
    RxjsOperatorsRoutingModule
  ]
})
export class RxjsOperatorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form.component';
import { FormsRoutingModule } from './forms-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsPageComponent } from './inputs-page.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { RatingComponent } from './shared/components/rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InputsPageComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    ReactiveFormsModule
  ]
})
export class InputsModule { }

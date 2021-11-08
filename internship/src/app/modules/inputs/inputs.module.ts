import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsPageComponent } from './inputs-page.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { RatingComponent } from './shared/components/rating/rating.component';



@NgModule({
  declarations: [
    InputsPageComponent,
    RatingComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule
  ]
})
export class InputsModule { }

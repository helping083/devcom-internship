import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives-page.component';
import { DirectivesRoutingModule } from './directives-routing.module';



@NgModule({
  declarations: [
    DirectivesPageComponent
  ],
  imports: [
    DirectivesRoutingModule,
    CommonModule
  ]
})
export class DirectivesModule { }

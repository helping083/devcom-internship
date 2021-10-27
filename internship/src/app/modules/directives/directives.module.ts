import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives-page.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { UnlessDirective } from './shared/directives/unless.directive';



@NgModule({
  declarations: [
    DirectivesPageComponent,
    UnlessDirective
  ],
  imports: [
    DirectivesRoutingModule,
    CommonModule
  ]
})
export class DirectivesModule { }

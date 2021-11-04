import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributiveStructuralComponent } from './attributive-structural.component';
import { ExpandableDirective } from './shared/directives/expandable.directive';
import { IfelseDirective } from './shared/directives/ifelse.directive';



@NgModule({
  declarations: [
    AttributiveStructuralComponent,
    ExpandableDirective,
    IfelseDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AttributiveStructuralModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributiveStructuralComponent } from './attributive-structural.component';
import { ExpandableDirective } from './shared/directives/expandable.directive';
import { IfelseDirective } from './shared/directives/ifelse.directive';
import { AttributiveStructuralRoutingModule } from './attributive-structural-routing.module';
import { DirectivesService } from 'src/app/core/data/services/directives.service';
import { PostCardModule } from 'src/app/shared/components/posts-card/post-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AttributiveStructuralComponent,
    ExpandableDirective,
    IfelseDirective
  ],
  imports: [
    CommonModule,
    PostCardModule,
    AttributiveStructuralRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [DirectivesService]
})
export class AttributiveStructuralModule { }

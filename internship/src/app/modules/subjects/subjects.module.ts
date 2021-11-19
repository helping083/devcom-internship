import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsPageComponent } from './subjects-page.component';
import { SubjectsRoutingModule } from './subjects.routing.module';
import { SubjectsService } from './shared/services/subjects.service';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';

@NgModule({
  declarations: [
    SubjectsPageComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ],
  providers: [
    SubjectsService,
    AsyncSubjectsService
  ]
})
export class SubjectsModule { }

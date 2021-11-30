import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsPageComponent } from './subjects-page.component';
import { SubjectsRoutingModule } from './subjects.routing.module';
import { SubjectsService } from './shared/services/subjects.service';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';
import { ClassicsubjectComponent } from './shared/components/classicsubject/classicsubject.component';
import { CustomInputComponent } from './shared/components/custom-input/custom-input.component';
import { UserComponent } from './shared/components/user/user.component';
import { ReplaySubjectService } from './shared/services/replay-subject.service';

@NgModule({
  declarations: [
    SubjectsPageComponent,
    CustomInputComponent,
    ClassicsubjectComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SubjectsRoutingModule
  ],
  providers: [
    SubjectsService,
    AsyncSubjectsService,
    ReplaySubjectService
  ]
})
export class SubjectsModule { }

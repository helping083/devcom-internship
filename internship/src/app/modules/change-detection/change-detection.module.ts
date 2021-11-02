import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionPageComponent } from './change-detection-page.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { PostCardModule } from 'src/app/shared/components/posts-card/post-card.module';
import { AddPostFormComponent } from './shared/components/add-post-form/add-post-form.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    ChangeDetectionPageComponent,
    AddPostFormComponent
  ],
  imports: [
    CommonModule, ChangeDetectionRoutingModule, PostCardModule, FormsModule
  ]
})
export class ChangeDetectionModule { }

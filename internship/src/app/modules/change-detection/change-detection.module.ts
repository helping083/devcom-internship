import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectionPageComponent } from './change-detection-page/change-detection-page.component';
import { ChangeDetectionRoutingModule } from './change-detection-routing.module';
import { PostCardModule } from 'src/app/shared/components/posts-card/post-card.module';



@NgModule({
  declarations: [
    ChangeDetectionPageComponent
  ],
  imports: [
    CommonModule, ChangeDetectionRoutingModule, PostCardModule
  ]
})
export class ChangeDetectionModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsCardComponent } from './posts-card.component';


@NgModule({
    declarations: [PostsCardComponent],
    imports: [CommonModule],
    exports: [PostsCardComponent]
  })
export class PostCardModule {}
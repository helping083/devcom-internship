import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IPost } from 'src/app/core/data/models';

@Component({
  selector: 'app-posts-card',
  templateUrl: './posts-card.component.html',
  styleUrls: ['./posts-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsCardComponent implements OnInit {
  @Input() public card!: IPost;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { IComment } from 'src/app/core/data/models';

@Component({
  selector: 'app-commets-card',
  templateUrl: './commets-card.component.html',
  styleUrls: ['./commets-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommetsCardComponent implements OnInit {
  @Input() comment!: IComment
  constructor() { }

  ngOnInit(): void {
  }

}

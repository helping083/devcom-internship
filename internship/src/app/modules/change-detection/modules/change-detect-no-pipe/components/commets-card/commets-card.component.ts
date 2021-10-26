import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-commets-card',
  templateUrl: './commets-card.component.html',
  styleUrls: ['./commets-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommetsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

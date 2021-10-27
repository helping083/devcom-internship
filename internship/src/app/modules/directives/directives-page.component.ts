import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectivesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

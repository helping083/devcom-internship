import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rxjs-page',
  templateUrl: './rxjs-page.component.html',
  styleUrls: ['./rxjs-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

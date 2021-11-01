import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IUser } from 'src/app/core/data/models';
import { DirectivesService } from 'src/app/core/data/services/directives.service';

@Component({
  selector: 'app-directives-page',
  templateUrl: './directives-page.component.html',
  styleUrls: ['./directives-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectivesPageComponent implements OnInit {
  public users$: Observable<IUser[]> = this._getUsersData();

  constructor(private readonly _directivesService: DirectivesService) { }

  ngOnInit(): void {
  }

  private _getUsersData(): Observable<IUser[]> {
    return this._directivesService.getUsers().pipe(delay(1000));
  }
}

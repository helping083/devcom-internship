import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/data/models';
import { ChangeDetectionService } from 'src/app/core/data/services/change-detection.service';

@Component({
  selector: 'app-change-detection-page',
  templateUrl: './change-detection-page.component.html',
  styleUrls: ['./change-detection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionPageComponent implements OnInit {
  public posts$: Observable<IPost[]> = this.getchangeDetectionPosts();

  constructor(private readonly _changeDetectionService: ChangeDetectionService) { }

  ngOnInit(): void {
  };

  public getchangeDetectionPosts():Observable<IPost[]> {
    return this._changeDetectionService.getPosts();
  }
};

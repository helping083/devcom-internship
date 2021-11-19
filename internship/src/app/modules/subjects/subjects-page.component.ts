import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AsyncSubjectsService } from './shared/services/async-subjects.service';
import { SubjectsService } from './shared/services/subjects.service';

@Component({
  selector: 'app-subjects-page',
  templateUrl: './subjects-page.component.html',
  styleUrls: ['./subjects-page.component.scss'],
  providers: [AsyncSubjectsService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubjectsPageComponent implements OnInit {
  @ViewChild('button', { static: true, read: ElementRef }) private readonly button!: ElementRef;
  @ViewChild('async', { static: true, read: ElementRef }) private readonly asyncButton!: ElementRef;

  constructor(private readonly subjectService: SubjectsService, private readonly asyncSubjectsService: AsyncSubjectsService) { }

  ngOnInit(): void {
    this._initListeners();
    this._subscribeToSubjects();
    this.asyncSubjectsService.makeAsyncRequest(`https://api.github.com/users?per_page=5`);

  }
  private _initListeners(): void {
    fromEvent(this.button.nativeElement, 'click')
      .subscribe((_) => {
        this.subjectService.makeRequest(`https://api.github.com/users?per_page=5`);
      });
    fromEvent(this.asyncButton.nativeElement, 'click')
      .subscribe((_) => {
        this.asyncSubjectsService.completeLoading();
      });
  }
  private _subscribeToSubjects(): void {
    this.subjectService.getGithubUsers()
      .subscribe((val) => {
        console.log(val)
      })
    this.asyncSubjectsService.asyncDataLoader.subscribe((loader: boolean) => {
      console.log('loader', loader);
    });
    this.asyncSubjectsService.preloadedData.subscribe((l: any) => {
      console.log(l);
    });
  }
}

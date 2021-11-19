import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { AjaxObservable } from 'rxjs/internal/observable/dom/AjaxObservable';
import { switchMap, delay, map } from 'rxjs/operators';

@Injectable()
export class AsyncSubjectsService {
  private _preloadData: AsyncSubject<string> = new AsyncSubject<string>();
  private _asyncDataLoader: AsyncSubject<boolean> = new AsyncSubject<boolean>();

  constructor() { }

  get asyncDataLoader(): Observable<boolean> {
    return this._asyncDataLoader.asObservable();
  }

  get preloadedData(): Observable<any> {
    return this._preloadData.asObservable()
      .pipe(
        switchMap((url: string): AjaxObservable<any> => {
          return ajax(url) as AjaxObservable<any>;
        }),
        map((userResponse: AjaxResponse): [] => {
          return userResponse.response
        })
      )
  }

  public completeLoading(): void {
    this._asyncDataLoader.next(true);
    this._asyncDataLoader.complete();
    this._preloadData.complete();
  }

  public makeAsyncRequest(url: string): void {
    this._preloadData.next(url);
  }
}

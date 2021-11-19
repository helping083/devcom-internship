import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax, AjaxRequest, AjaxResponse } from 'rxjs/ajax';
import { AjaxObservable } from 'rxjs/internal/observable/dom/AjaxObservable';
import { switchMap, delay, map } from 'rxjs/operators';

@Injectable()
export class SubjectsService {
  private _classicSubject: Subject<string> = new Subject<string>();

  constructor() { }

  public getGithubUsers(): Observable<any> {
    return this._classicSubject
      .asObservable()
      .pipe(
        switchMap((url: string): AjaxObservable<any> => {
          return ajax(url).pipe(delay(1000)) as AjaxObservable<any>;
        }),
        map((userResponse: AjaxResponse): [] => {
          return userResponse.response
        })
      )
  }
  public makeRequest(url: string): void {
    this._classicSubject.next(url)
  }
}

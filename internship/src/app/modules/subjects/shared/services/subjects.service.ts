import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { switchMap, delay, map, tap } from 'rxjs/operators';
import { GithubUsers } from '../models/githubUsers.interface';

@Injectable()
export class SubjectsService {
  private _classicSubject: Subject<string> = new Subject<string>();
  private _githubUsers: Subject<GithubUsers[]> = new Subject<GithubUsers[]>();

  constructor() { }

  get githubUsers(): Observable<any> {
    return this._githubUsers.asObservable();
  }

  public getGithubUsers(): Observable<GithubUsers[]> {
    return this._classicSubject
      .asObservable()
      .pipe(
        switchMap((url: string): Observable<AjaxResponse> => {
          return ajax(url).pipe(delay(1000));
        }),
        map((userResponse: AjaxResponse): GithubUsers[] => {
          return userResponse.response as Array<GithubUsers>
        }),
        tap((users: GithubUsers[]): void => {
          this._githubUsers.next(users);
        })
      )
  }

  public makeRequest(url: string): void {
    this._classicSubject.next(url)
  }
}

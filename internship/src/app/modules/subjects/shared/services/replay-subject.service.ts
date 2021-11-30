import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { GithubUsers } from '../models/githubUsers.interface';

@Injectable()
export class ReplaySubjectService {
  public _latestRequests = new ReplaySubject(3)
  constructor() { }

  public get latestRequests(): Observable<any> {
    return this._latestRequests.asObservable();
  }

  public setLastRequest(githubUsers: any): void {
    this._latestRequests.next(githubUsers);
  }
}

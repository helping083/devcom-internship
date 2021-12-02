import { Injectable } from '@angular/core';
import { AsyncSubject, Observable } from 'rxjs';


@Injectable()
export class AsyncSubjectsService {
  private _preloadData: AsyncSubject<Date> = new AsyncSubject<Date>();

  constructor() { }

  get lastredirect(): Observable<Date> {
    return this._preloadData.asObservable();
  }

  public setLastLogged(lastLogged: Date): void {
    this._preloadData.next(lastLogged);
  }

  public showLastLogged(): void {
    this._preloadData.complete();
  }
}

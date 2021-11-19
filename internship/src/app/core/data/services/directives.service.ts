import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../constants';
import { IUser } from '../models';

@Injectable()
export class DirectivesService {

  constructor(private readonly _http: HttpClient) { }


  public getUsers(): Observable<IUser[]> {
    return this._http.get<IUser[]>(`${API_ENDPOINT}/users`);
  }
}

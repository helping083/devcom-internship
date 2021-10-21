import { Injectable } from '@angular/core';
import { IPost, IPosts } from '../models';
import { API_ENDPOINT } from '../../constants';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeDetectionService {

  constructor(private readonly _http: HttpClient) { }

  public getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>(`${API_ENDPOINT}/posts`);
  };
}

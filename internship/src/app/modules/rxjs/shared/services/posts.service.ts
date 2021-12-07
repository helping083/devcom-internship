import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/core/data/models';

@Injectable()
export class PostsService {
  private readonly _apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private readonly _httpClient: HttpClient) {}

  public sendPost(data: IPost): Observable<IPost> {
    return this._httpClient.post<IPost>(this._apiUrl, data);
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cocktailApiConfig } from 'src/app/core/configs/football-api';
import { ICocktail } from 'src/app/core/data/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class CocktailService {
  private readonly _headers = cocktailApiConfig;
  private readonly _coktailApiUrl: string = environment.cocktailApiUrl;

  constructor(private readonly _http: HttpClient) { }

  public searchCoktail(searchData: string): Observable<any> {
    const params = new HttpParams().append('query', searchData).append('number', 10);

    return this._http.get<any>(`${this._coktailApiUrl}/recipes/autocomplete`, { params, headers: this._headers });
  };
};
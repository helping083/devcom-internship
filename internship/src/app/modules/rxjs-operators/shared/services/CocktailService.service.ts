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

  public searchCoktail(searchData: string): Observable<ICocktail[]> {
    const params = new HttpParams().append('i', searchData);

    return this._http.get<ICocktail[]>(`${this._coktailApiUrl}/filter.php`, { params, headers: this._headers });
  };
};
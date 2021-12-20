import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { recipeApiConfig } from 'src/app/core/configs/recipe-api';
import { IRecipe, IRecipeSearch } from 'src/app/core/data/models';
import { environment } from 'src/environments/environment';

@Injectable()
export class RecipelService {
  private readonly _headers: { [key:string]: string } = recipeApiConfig;
  private readonly _recipeApiUrl: string = environment.recipeApiUrl;

  constructor(private readonly _http: HttpClient) { }

  public searchCoktail(searchData: string): Observable<IRecipeSearch[]> {
    const params = new HttpParams().append('query', searchData).append('number', 10);

    return this._http.get<IRecipeSearch[]>(`${this._recipeApiUrl}/recipes/autocomplete`, { params, headers: this._headers });
  };

  public getRecipe(recipeId: string): Observable<IRecipe> {
    return this._http.get<IRecipe>(`${this._recipeApiUrl}/recipes/${recipeId}/information`, { headers: this._headers });
  };
};
import { Component, Input, OnInit } from '@angular/core';
import { IRecipe } from 'src/app/core/data/models';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss']
})
export class IngredientDetailsComponent implements OnInit {
  get ingredients(): IRecipe {
    return this._details;
  }
  
  @Input() set ingredientDetails(details: IRecipe) {
    this._details = details;
  }

  private _details!: IRecipe;

  constructor() { }

  ngOnInit(): void {
  }

}

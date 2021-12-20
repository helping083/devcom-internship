import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IRecipe } from 'src/app/core/data/models';

@Component({
  selector: 'app-ingredient-details',
  templateUrl: './ingredient-details.component.html',
  styleUrls: ['./ingredient-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IngredientDetailsComponent  {
  get ingredients(): IRecipe {
    return this._details;
  };
  
  @Input() public set ingredientDetails(details: IRecipe) {
    this._details = details;
  };

  private _details!: IRecipe;

}

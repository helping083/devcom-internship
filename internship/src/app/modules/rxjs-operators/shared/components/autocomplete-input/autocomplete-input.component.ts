import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IRecipeSearch } from 'src/app/core/data/models';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteInputComponent {
  @Input() public autocompleteData: IRecipeSearch[] = [];
  @Input() public control!: FormControl;

  @Output() public readonly search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  public handleOptionClick(recipeId: string): void {
    this.search.emit(recipeId);
  };
}

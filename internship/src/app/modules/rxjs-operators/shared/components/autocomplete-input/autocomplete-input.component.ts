import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {
  @Input() autocompleteData: any[] = [];
  @Input() control!: FormControl;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void { }

  public handleOptionClick(recipeId: string): void {
    this.search.emit(recipeId);
  }
}

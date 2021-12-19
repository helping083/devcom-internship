import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-autocomplete-input',
  templateUrl: './autocomplete-input.component.html',
  styleUrls: ['./autocomplete-input.component.scss']
})
export class AutocompleteInputComponent implements OnInit {
  @Input() control!: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((val: string) => {
      console.log('val', val)
    })
  }

}

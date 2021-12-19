import { Component, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  @ViewChild('root') rootTemplate!: TemplateRef<any>;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  public optionsClick(): void { 

  }
}

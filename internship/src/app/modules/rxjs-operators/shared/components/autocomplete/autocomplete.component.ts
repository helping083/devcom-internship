import { Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AutocompleteContentDirective } from '../../directives/autocomplete-content.directive';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-autocomplete',
  template: `
    <ng-template #root>
      <div class="autocomplete">
        <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'appAutocompleteComponent'
})
export class AutocompleteComponent {
  @ViewChild('root') rootTemplate!: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective) content!: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) options!: QueryList<OptionComponent>;

  optionsClick() {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: OptionComponent) => option.click$);
        return merge(...clicks$);
      })
    );
  }
}

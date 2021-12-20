import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, OnInit, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AutocompleteContentDirective } from '../../directives/autocomplete-content.directive';
import { OptionComponent } from '../option/option.component';

@Component({
  selector: 'app-autocomplete',
  styleUrls: ['./autocomplete.component.scss'],
  template: `
    <ng-template #root>
      <div class="autocomplete">
        <ng-container *ngTemplateOutlet="content.tpl"></ng-container>
      </div>
    </ng-template>
  `,
  exportAs: 'appAutocompleteComponent',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteComponent {
  @ViewChild('root') public rootTemplate!: TemplateRef<any>;

  @ContentChild(AutocompleteContentDirective) public content!: AutocompleteContentDirective;

  @ContentChildren(OptionComponent) public options!: QueryList<OptionComponent>;

  public optionsClick(): Observable<any> {
    return this.options.changes.pipe(
      switchMap(options => {
        const clicks$ = options.map((option: OptionComponent) => option.click$);
        return merge(...clicks$);
      })
    );
  };
}

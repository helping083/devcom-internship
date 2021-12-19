import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { RxjsOperatorsRoutingModule } from './rxjs-operators.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CocktailService } from './shared/services/CocktailService.service';
import { AutocompleteInputComponent } from './shared/components/autocomplete-input/autocomplete-input.component';
import { OptionComponent } from './shared/components/option/option.component';
import { AutocompleteComponent } from './shared/components/autocomplete/autocomplete.component';
import { AutocompleteContentDirective } from './shared/directives/autocomplete-content.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { AutocompleteDirective } from './shared/directives/autocomplete.directive';


@NgModule({
  declarations: [
    RxjsOperatorsComponent,
    AutocompleteInputComponent,
    OptionComponent,
    AutocompleteComponent,
    AutocompleteContentDirective,
    AutocompleteDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RxjsOperatorsRoutingModule,
    OverlayModule
  ],
  providers: [CocktailService]
})
export class RxjsOperatorsModule { }

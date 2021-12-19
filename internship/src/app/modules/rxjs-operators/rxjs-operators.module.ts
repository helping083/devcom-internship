import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsOperatorsComponent } from './rxjs-operators.component';
import { RxjsOperatorsRoutingModule } from './rxjs-operators.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CocktailService } from './shared/services/CocktailService.service';
import { AutocompleteInputComponent } from './shared/components/autocomplete-input/autocomplete-input.component';
import { OptionComponent } from './shared/components/option/option.component';
import { AutocompleteComponent } from './shared/components/autocomplete/autocomplete.component';



@NgModule({
  declarations: [
    RxjsOperatorsComponent,
    AutocompleteInputComponent,
    OptionComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RxjsOperatorsRoutingModule
  ],
  providers: [CocktailService]
})
export class RxjsOperatorsModule { }

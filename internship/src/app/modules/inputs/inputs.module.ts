import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsPageComponent } from './inputs-page.component';
import { InputsRoutingModule } from './inputs-routing.module';
import { RatingComponent } from './shared/components/rating/rating.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomCounterComponent } from './shared/components/custom-counter/custom-counter.component';
import { CustomFilesLoaderComponent } from './shared/components/custom-files-loader/custom-files-loader.component';


@NgModule({
  declarations: [
    InputsPageComponent,
    RatingComponent,
    CustomCounterComponent,
    CustomFilesLoaderComponent
  ],
  imports: [
    CommonModule,
    InputsRoutingModule,
    ReactiveFormsModule
  ]
})
export class InputsModule { }

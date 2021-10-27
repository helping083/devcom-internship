import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeDetectNoPipePageComponent } from './change-detect-no-pipe-page.component';
import { ChangeDetectionNoPipeRoutingModule } from './change-detect-no-pipe-routing.module';
import { CommetsCardComponent } from './components/commets-card/commets-card.component';



@NgModule({
  declarations: [
    ChangeDetectNoPipePageComponent,
    CommetsCardComponent
  ],
  imports: [
    CommonModule,
    ChangeDetectionNoPipeRoutingModule
  ]
})
export class ChangeDetectNoPipeModule { }

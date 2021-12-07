import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPageComponent } from './rxjs-page.component';
import { RXJSRoutingModule } from './rxjs-routing.module';
import { TimerComponent } from './shared/components/timer/timer.component';



@NgModule({
  declarations: [
    RxjsPageComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    RXJSRoutingModule
  ]
})
export class RxjsModule { }

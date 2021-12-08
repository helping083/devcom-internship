import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsPageComponent } from './rxjs-page.component';
import { RXJSRoutingModule } from './rxjs-routing.module';
import { TimerComponent } from './shared/components/timer/timer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './shared/components/search/search.component';
import { PostsService } from './shared/services/posts.service';
import { TimerPipe } from './shared/pipes/timer.pipe';



@NgModule({
  declarations: [
    RxjsPageComponent,
    TimerComponent,
    SearchComponent,
    TimerPipe,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RXJSRoutingModule
  ],
  providers: [PostsService]
})
export class RxjsModule { }

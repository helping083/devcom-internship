import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesPageComponent } from './directives-page.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { UnlessDirective } from './shared/directives/unless.directive';
import { SelectTemplateRefComponent } from './shared/components/select-template-ref/select-template-ref.component';
import { DirectivesService } from 'src/app/core/data/services/directives.service';
import { SelectNgContentComponent } from './shared/components/select-ng-content/select-ng-content.component';
import { SelectContentChildComponent } from './shared/components/select-content-child/select-content-child.component';
import { PortalModule } from '@angular/cdk/portal';
import { SelectContentChildrenComponent } from './shared/components/select-content-children/select-content-children.component';
import { SelectAsyncComponent } from './shared/components/select-async/select-async.component';


@NgModule({
  declarations: [
    DirectivesPageComponent,
    UnlessDirective,
    SelectTemplateRefComponent,
    SelectNgContentComponent,
    SelectContentChildComponent,
    SelectContentChildrenComponent,
    SelectAsyncComponent
  ],
  imports: [
    DirectivesRoutingModule,
    CommonModule,
    PortalModule
  ],
  providers: [DirectivesService]
})
export class DirectivesModule { }

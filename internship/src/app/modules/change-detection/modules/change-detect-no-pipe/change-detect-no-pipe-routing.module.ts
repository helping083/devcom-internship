import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectNoPipePageComponent } from './change-detect-no-pipe-page.component';

const routes: Routes = [
    {
        path: '',
        component: ChangeDetectNoPipePageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangeDetectionNoPipeRoutingModule {}
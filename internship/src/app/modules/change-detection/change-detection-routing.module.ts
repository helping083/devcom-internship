import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionPageComponent } from './change-detection-page.component';

const routes: Routes = [
    {
        path: '',
        component: ChangeDetectionPageComponent,
        pathMatch: 'full'
    },
    {
        path:'no-pipe',
        loadChildren: () => import('./modules/change-detect-no-pipe/change-detect-no-pipe.module').then( m => m.ChangeDetectNoPipeModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangeDetectionRoutingModule {}
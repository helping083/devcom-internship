import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeDetectionPageComponent } from './change-detection-page/change-detection-page.component';


const routes: Routes = [
    {
        path: '',
        component: ChangeDetectionPageComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ChangeDetectionRoutingModule {}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputsPageComponent } from './inputs-page.component';

const routes: Routes = [
    {
        path: '',
        component: InputsPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InputsRoutingModule {}
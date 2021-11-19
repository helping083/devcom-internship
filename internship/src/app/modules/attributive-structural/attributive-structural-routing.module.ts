import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributiveStructuralComponent } from './attributive-structural.component';

const routes: Routes = [
  {
    path: '',
    component: AttributiveStructuralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributiveStructuralRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'custonmInputs',
    loadChildren: () => import('./modules/inputs/inputs.module').then(m => m.InputsModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./modules/directives/directives.module').then(m => m.DirectivesModule)
  },
  {
    path:'changeDetection',
    loadChildren: () => import('./modules/change-detection/change-detection.module').then(m => m.ChangeDetectionModule)
  },
  {
    path: 'subjects',
    loadChildren: () => import('./modules/subjects/subjects.module').then(m => m.SubjectsModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

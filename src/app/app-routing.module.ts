import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ejemplo1Component } from './componentes/ejemplo1/ejemplo1.component';
import { Ejemplo2Component } from './componentes/ejemplo2/ejemplo2.component';

const routes: Routes = [
  {
    path: '',
    component: Ejemplo1Component
  },
  {
      path: '2',
      component: Ejemplo2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

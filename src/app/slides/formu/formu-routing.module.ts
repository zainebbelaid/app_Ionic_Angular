import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormuPage } from './formu.page';

const routes: Routes = [
  {
    path: '',
    component: FormuPage
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormuPageRoutingModule {}

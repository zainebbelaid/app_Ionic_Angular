import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezVousAddPage } from './rendez-vous-add.page';

const routes: Routes = [
  {
    path: '',
    component: RendezVousAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezVousAddPageRoutingModule {}

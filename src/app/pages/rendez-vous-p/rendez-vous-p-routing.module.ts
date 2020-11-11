import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RendezVousPPage } from './rendez-vous-p.page';

const routes: Routes = [
  {
    path: '',
    component: RendezVousPPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RendezVousPPageRoutingModule {}

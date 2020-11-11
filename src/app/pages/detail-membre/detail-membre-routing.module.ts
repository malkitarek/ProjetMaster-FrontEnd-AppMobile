import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMembrePage } from './detail-membre.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMembrePageRoutingModule {}

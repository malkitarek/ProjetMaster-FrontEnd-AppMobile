import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailMedecinPage } from './detail-medecin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailMedecinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailMedecinPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonneePage } from './donnee.page';

const routes: Routes = [
  {
    path: '',
    component: DonneePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonneePageRoutingModule {}

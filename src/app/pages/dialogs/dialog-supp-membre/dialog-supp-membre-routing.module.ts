import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogSuppMembrePage } from './dialog-supp-membre.page';

const routes: Routes = [
  {
    path: '',
    component: DialogSuppMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogSuppMembrePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogAffilMembrePage } from './dialog-affil-membre.page';

const routes: Routes = [
  {
    path: '',
    component: DialogAffilMembrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogAffilMembrePageRoutingModule {}

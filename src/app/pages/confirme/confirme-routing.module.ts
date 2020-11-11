import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmePage } from './confirme.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmePageRoutingModule {}

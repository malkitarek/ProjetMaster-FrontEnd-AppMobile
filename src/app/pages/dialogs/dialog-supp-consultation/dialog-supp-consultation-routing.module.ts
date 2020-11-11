import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DialogSuppConsultationPage } from './dialog-supp-consultation.page';

const routes: Routes = [
  {
    path: '',
    component: DialogSuppConsultationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DialogSuppConsultationPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeviceCreateModalPage } from './device-create-modal.page';

const routes: Routes = [
  {
    path: '',
    component: DeviceCreateModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceCreateModalPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DevicePageRoutingModule } from './device-routing.module';

import { DevicePage } from './device.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MembrePageRoutingModule} from '../membre/membre-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {DeviceDetailComponent} from '../../components/modals/device-detail/device-detail.component';
import {DeviceCreateModalPageModule} from '../device-create-modal/device-create-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    DevicePageRoutingModule,
    DeviceCreateModalPageModule,
  ],
  declarations: [DevicePage,DeviceDetailComponent],
  entryComponents:[DeviceDetailComponent]
})
export class DevicePageModule {}

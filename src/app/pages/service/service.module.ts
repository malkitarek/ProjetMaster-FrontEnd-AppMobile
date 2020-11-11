import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicePageRoutingModule } from './service-routing.module';

import { ServicePage } from './service.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DetailServiceComponent} from '../../components/modals/detail-service/detail-service.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    ServicePageRoutingModule
  ],
  declarations: [ServicePage,DetailServiceComponent],
  entryComponents:[DetailServiceComponent]
})
export class ServicePageModule {}

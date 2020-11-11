import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPPageRoutingModule } from './rendez-vous-p-routing.module';

import { RendezVousPPage } from './rendez-vous-p.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {DetailRendezComponent} from '../../components/modals/detail-rendez/detail-rendez.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    RendezVousPPageRoutingModule
  ],
  declarations: [RendezVousPPage,DetailRendezComponent],
  entryComponents:[DetailRendezComponent]
})
export class RendezVousPPageModule {}

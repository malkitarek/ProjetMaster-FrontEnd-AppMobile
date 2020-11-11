import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailMedecinPageRoutingModule } from './detail-medecin-routing.module';

import { DetailMedecinPage } from './detail-medecin.page';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatIconModule,
    DetailMedecinPageRoutingModule
  ],
  declarations: [DetailMedecinPage]
})
export class DetailMedecinPageModule {}

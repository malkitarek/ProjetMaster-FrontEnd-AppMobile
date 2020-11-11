import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonneePageRoutingModule } from './donnee-routing.module';

import { DonneePage } from './donnee.page';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatListModule,
    MatIconModule,
    DonneePageRoutingModule
  ],
  declarations: [DonneePage]
})
export class DonneePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmePageRoutingModule } from './confirme-routing.module';

import { ConfirmePage } from './confirme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmePageRoutingModule
  ],
  declarations: [ConfirmePage]
})
export class ConfirmePageModule {}

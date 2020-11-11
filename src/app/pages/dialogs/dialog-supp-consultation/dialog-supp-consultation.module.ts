import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogSuppConsultationPageRoutingModule } from './dialog-supp-consultation-routing.module';

import { DialogSuppConsultationPage } from './dialog-supp-consultation.page';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogSuppConsultationPageRoutingModule,
    MatDialogModule
  ],
  declarations: [DialogSuppConsultationPage]
})
export class DialogSuppConsultationPageModule {}

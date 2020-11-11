import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogSuppMembrePageRoutingModule } from './dialog-supp-membre-routing.module';

import { DialogSuppMembrePage } from './dialog-supp-membre.page';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogSuppMembrePageRoutingModule,
    MatDialogModule
  ],
  declarations: [DialogSuppMembrePage]
})
export class DialogSuppMembrePageModule {}

import {Inject, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DialogAffilMembrePageRoutingModule } from './dialog-affil-membre-routing.module';

import { DialogAffilMembrePage } from './dialog-affil-membre.page';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DialogAffilMembrePageRoutingModule,
    MatDialogModule

  ],
  declarations: [DialogAffilMembrePage]
})
export class DialogAffilMembrePageModule {

}

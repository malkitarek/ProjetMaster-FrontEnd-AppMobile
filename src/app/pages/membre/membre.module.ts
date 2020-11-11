import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MembrePageRoutingModule } from './membre-routing.module';

import { MembrePage } from './membre.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MembrePageRoutingModule,
    MatDialogModule
  ],
  declarations: [MembrePage]
})
export class MembrePageModule {}

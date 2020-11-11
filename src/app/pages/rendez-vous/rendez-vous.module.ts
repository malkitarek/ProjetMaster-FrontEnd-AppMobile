import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RendezVousPageRoutingModule } from './rendez-vous-routing.module';

import { RendezVousPage } from './rendez-vous.page';
import {NgCalendarModule} from 'ionic2-calendar';
import {CalModalPageModule} from '../cal-modal/cal-modal.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RendezVousPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [RendezVousPage],

})
export class RendezVousPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationsPageRoutingModule } from './notifications-routing.module';

import { NotificationsPage } from './notifications.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MatListModule,
    NotificationsPageRoutingModule
  ],
  declarations: [NotificationsPage]
})
export class NotificationsPageModule {}

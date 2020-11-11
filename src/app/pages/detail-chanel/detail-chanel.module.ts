import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailChanelPageRoutingModule } from './detail-chanel-routing.module';

import { DetailChanelPage } from './detail-chanel.page';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChartsModule} from 'ng2-charts';
import {WebSocketApiService} from '../../services/web-socket/web-socket-api.service';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule, MatSelectionList} from '@angular/material/list';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailChanelPageRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    ChartsModule,
    MatNativeDateModule,
    MatTabsModule,
    MatListModule

  ],
  providers:[WebSocketApiService],
  declarations: [DetailChanelPage]
})
export class DetailChanelPageModule {}

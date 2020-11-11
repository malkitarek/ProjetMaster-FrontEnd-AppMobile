import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageMPPageRoutingModule } from './message-m-p-routing.module';

import { MessageMPPage } from './message-m-p.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatBadgeModule} from '@angular/material/badge';
import {DetailMessageComponent} from '../../components/modals/detail-message/detail-message.component';
import {AutosizeModule} from 'ngx-autosize';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    MatBadgeModule,
    AutosizeModule,
    MessageMPPageRoutingModule
  ],
  declarations: [MessageMPPage,DetailMessageComponent],
  entryComponents: [DetailMessageComponent]
})
export class MessageMPPageModule {}

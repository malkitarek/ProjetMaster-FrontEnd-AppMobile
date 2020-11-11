import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceCreateModalPageRoutingModule } from './device-create-modal-routing.module';

import { DeviceCreateModalPage } from './device-create-modal.page';
import {NgCalendarModule} from 'ionic2-calendar';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule, NgxMatTimepickerModule} from '@angular-material-components/datetime-picker';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeviceCreateModalPageRoutingModule,
    NgCalendarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
  ],
  declarations: [DeviceCreateModalPage]
})
export class DeviceCreateModalPageModule {}

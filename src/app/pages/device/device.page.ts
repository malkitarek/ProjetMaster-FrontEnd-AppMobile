import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ModalController} from '@ionic/angular';
import {DeviceDetailComponent} from '../../components/modals/device-detail/device-detail.component';
import {DeviceCreateModalPage} from '../device-create-modal/device-create-modal.page';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {
    term;
  devices;
  user;

  constructor(private authSer:AuthService,private modalCrtl:ModalController) { }

  ngOnInit() {
    this.getDevices()
  }

  getDevices(){
    this.authSer.getUser().subscribe(data=>{
      this.user=data
    this.authSer.getDevices().subscribe(data=>{
      this.devices=data

    })
    })
  }

  async detailDevice(id) {
    const modal = await this.modalCrtl.create({
     component:DeviceDetailComponent,
     componentProps:{
       'idDevice':id
     }
   })
    await modal.present();
  }

  openDialog(id: any, id2: any) {

  }

  async updateDevice(device) {
    const modal = await this.modalCrtl.create({
      cssClass: 'cal-modal',
      backdropDismiss: false,
      component:DeviceCreateModalPage,
      componentProps:{
        'device': device,
        'update':1
      }

    })
    await modal.present();
  }

 async createDevice() {
    const modal = await this.modalCrtl.create({
      cssClass: 'cal-modal',
      backdropDismiss: false,
      component:DeviceCreateModalPage,

    })
    await modal.present();
  }
}

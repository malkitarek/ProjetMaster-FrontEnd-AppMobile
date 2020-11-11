import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss'],
})
export class DeviceDetailComponent implements OnInit{
  idDevice;
  device;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams,private authSer:AuthService) {


  }
 ngOnInit(){
   this.idDevice=this.nvParam.get("idDevice");
   this.authSer.getDevice(this.idDevice).subscribe(data=>{
     this.device=data
   })
 }

  dimissModal() {
    this.modalCrtl.dismiss();
  }

}

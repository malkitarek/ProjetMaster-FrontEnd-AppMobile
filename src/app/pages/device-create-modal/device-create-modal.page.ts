import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth-service/auth.service';
import {ModalController, NavParams} from '@ionic/angular';
import {PatDeviceValidator} from '../../patDevice-validator';

@Component({
  selector: 'app-device-create-modal',
  templateUrl: './device-create-modal.page.html',
  styleUrls: ['./device-create-modal.page.scss'],
})
export class DeviceCreateModalPage implements OnInit {
  device;
  formDevice: FormGroup;
  patients;
  constructor(private formBuilder:FormBuilder,public patientValidator:PatDeviceValidator,private authSer:AuthService,private modalCtrl:ModalController,private nvParam:NavParams) {
    this.device=this.nvParam.get("device");
    this.formDevice=this.formBuilder.group({
          id:[this.device?this.device.id:''],
          nom:[this.device?this.device.nom:''],
          description:[this.device?this.device.description:''],
          patientId:[this.device?this.device.patient.id:'',this.patientValidator.validatePatient.bind(this.patientValidator)],
      
        }

    )
  }

  ngOnInit() {
    this.authSer.getPatinets().subscribe(data=>{
      this.patients=data;
    })
  }

  hasError(field: string, error: string) {
    const ctrl = this.formDevice.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }

  close() {
    this.modalCtrl.dismiss()
  }
  save(){
    if(this.nvParam.get('update')==1){
      this.authSer.updateDevice(this.formDevice.value).subscribe(data=>{
        this.modalCtrl.dismiss();
        window.location.reload()
      })

    }else{
      this.authSer.saveDevice(this.formDevice.value).subscribe(data=>{
        this.modalCtrl.dismiss();
        window.location.reload()
      })
    }

  }
  delete(id){
    this.authSer.deleteDevice(id,this.device.patientId).subscribe(data=>{
      this.modalCtrl.dismiss();
      window.location.reload()
    })
  }
}

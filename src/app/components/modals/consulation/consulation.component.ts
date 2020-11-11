import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-consulation',
  templateUrl: './consulation.component.html',
  styleUrls: ['./consulation.component.scss'],
})
export class ConsulationComponent  {
 consultation;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {
    this.consultation=this.nvParam.get("consultation");
  }

  dimissModal() {
    this.modalCrtl.dismiss();
  }

}

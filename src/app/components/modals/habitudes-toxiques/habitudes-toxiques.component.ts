import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-habitudes-toxiques',
  templateUrl: './habitudes-toxiques.component.html',
  styleUrls: ['./habitudes-toxiques.component.scss'],
})
export class HabitudesToxiquesComponent {
  habitudesToxiques
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {
    this.habitudesToxiques=nvParam.get("habitudesToxiques")
  }



    dimissModal() {
        this.modalCrtl.dismiss();
    }
}

import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-maladies',
  templateUrl: './maladies.component.html',
  styleUrls: ['./maladies.component.scss'],
})
export class MaladiesComponent  {
 maladies;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {
    this.maladies=nvParam.get("maladies")
  }


    dimissModal() {
        this.modalCrtl.dismiss();
    }
}

import { Component } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-antecedents-familiaux',
  templateUrl: './antecedents-familiaux.component.html',
  styleUrls: ['./antecedents-familiaux.component.scss'],
})
export class AntecedentsFamiliauxComponent  {
   antecedentsFamiliaux;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {
    this.antecedentsFamiliaux=nvParam.get("antecedentsFamiliaux")
  }

    dimissModal() {
      this.modalCrtl.dismiss();
  }
}

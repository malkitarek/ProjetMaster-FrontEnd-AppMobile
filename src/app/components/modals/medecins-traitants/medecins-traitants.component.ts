import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-medecins-traitants',
  templateUrl: './medecins-traitants.component.html',
  styleUrls: ['./medecins-traitants.component.scss'],
})
export class MedecinsTraitantsComponent  {
  medecinsTraitants;
  term = '';
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {
    this.medecinsTraitants=nvParam.get("medecinsTraitants")}



    dimissModal() {
        this.modalCrtl.dismiss();
    }
}

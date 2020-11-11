import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-detail-service',
  templateUrl: './detail-service.component.html',
  styleUrls: ['./detail-service.component.scss'],
})
export class DetailServiceComponent implements OnInit {
   medecinsTraitants;
   term;
   service;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams) {

  }

  ngOnInit() {
     this.service=this.nvParam.get("service");
    this.medecinsTraitants=this.service.medt;
  }
  dimissModal() {
    this.modalCrtl.dismiss();
  }

}

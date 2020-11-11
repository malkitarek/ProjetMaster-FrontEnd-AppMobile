import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth-service/auth.service';

@Component({
  selector: 'app-detail-rendez',
  templateUrl: './detail-rendez.component.html',
  styleUrls: ['./detail-rendez.component.scss'],
})
export class DetailRendezComponent implements OnInit {

  rendezvous;
  term;

  constructor(private modalCrtl:ModalController,private nvParam:NavParams,private authSer:AuthService) {

  }

  ngOnInit() {
    this.rendezvous=this.nvParam.get("rendezvous");
  }
  dimissModal() {
    this.modalCrtl.dismiss();
  }

  validerRendez(idRendez) {
    this.authSer.validerRendez(idRendez).subscribe(data=>{
     window.location.reload();
    })
  }
}

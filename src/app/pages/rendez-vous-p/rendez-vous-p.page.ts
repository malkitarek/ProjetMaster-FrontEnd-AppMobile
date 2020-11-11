import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {DetailServiceComponent} from '../../components/modals/detail-service/detail-service.component';
import {ModalController} from '@ionic/angular';
import {DetailRendezComponent} from '../../components/modals/detail-rendez/detail-rendez.component';

@Component({
  selector: 'app-rendez-vous-p',
  templateUrl: './rendez-vous-p.page.html',
  styleUrls: ['./rendez-vous-p.page.scss'],
})
export class RendezVousPPage implements OnInit {
  term;
  rendezvous;
  p;
  patient;

  constructor(private authSer:AuthService,private modalCrt: ModalController) { }

  ngOnInit(): void {
    this.getRendezvous()
  }

  getRendezvous(){
    this.authSer.getUser().subscribe(data=>{
      this.patient=data;
      this.authSer.getRendezVousP(this.patient.id).subscribe(data=>{
          console.log(data)
        this.rendezvous=data;
      })
    });
  }

    async detailRendez(rend) {
        const modal = await this.modalCrt.create({
            component: DetailRendezComponent,
            componentProps: {
                'rendezvous': rend
            }
        })
        await modal.present();

    }


}

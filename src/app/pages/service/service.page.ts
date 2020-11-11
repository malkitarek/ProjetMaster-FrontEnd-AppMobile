import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ModalController} from '@ionic/angular';
import {ConsulationComponent} from '../../components/modals/consulation/consulation.component';
import {DetailServiceComponent} from '../../components/modals/detail-service/detail-service.component';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  services;
  term;
  user;
  medecins;
  constructor(private authSer:AuthService,private modalCrl:ModalController) { }

  ngOnInit() {
    this.getMedecinsTraitants()
  }
  getMedecinsTraitants(){
    this.authSer.getUser().subscribe(data=>{
      this.user=data;
      if(this.user.appUser.role=="PATIENT"){
        this.authSer.getMedecinsTraitants(this.user.id).subscribe(data=>{
          this.medecins=data;
          this.authSer.getServices().subscribe(data=>{
            this.services=data;
            for(let i=0;i<this.services.length;i++){
              let x=0;
              this.services[i].medt=[]
              for(let j=0;j<this.medecins.length;j++){
                if(this.medecins[j].service.nom==this.services[i].nom){
                  this.services[i].medt.push(this.medecins[j]);
                  x=x+1
                }
              }
            }
          })
        })
      }
    })
  }

  async detailService(service) {
    const modal = await this.modalCrl.create({
      component: DetailServiceComponent,
      componentProps: {
        'service': service
      }
    })
    await modal.present();

  }
}

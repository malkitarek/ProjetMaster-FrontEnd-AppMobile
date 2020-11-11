import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {WebSocketApiService} from '../../services/web-socket/web-socket-api.service';
import {ConsulationComponent} from '../../components/modals/consulation/consulation.component';
import {ModalController} from '@ionic/angular';
import {DetailMessageComponent} from '../../components/modals/detail-message/detail-message.component';

@Component({
  selector: 'app-message-m-p',
  templateUrl: './message-m-p.page.html',
  styleUrls: ['./message-m-p.page.scss'],
})
export class MessageMPPage implements OnInit {
   user;
   membre;
   membres;
   term;
   membresSocket;

  constructor(private authSer:AuthService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder
,private websocketapi:WebSocketApiService,private modalCrtl:ModalController) { }

  ngOnInit() {
    this.pushMessageRealTime();
    this.getMembres();
  }


  pushMessageRealTime(){
    let stompClient = this.websocketapi.connectMessage();

    stompClient.connect({}, frame => {

      // Subscribe to notification topic


      this.membresSocket=stompClient.subscribe('/topic/msgsMembres', membres => {
        this.membresSocket= JSON.parse(membres.body);
        if(this.user.appUser.role=='MEDECIN'){
          if(this.membresSocket[0].idMedecin==this.user.id &&  this.membresSocket[0].fromQui=='PATIENT')this.membres=this.membresSocket;
          if(this.membresSocket[0].idMedecin==this.user.id &&  this.membresSocket[0].fromQui=='MEDECIN')this.ngOnInit()
        }
        else {
          if(this.membresSocket[0].idPatient==this.user.id &&  this.membresSocket[0].fromQui=='MEDECIN')this.membres=this.membresSocket;
          if(this.membresSocket[0].idPatient==this.user.id &&  this.membresSocket[0].fromQui=='PATIENT')this.ngOnInit()
        }

        for(let i=0;i<this.membres.length;i++){
          if(this.user.appUser.role=='MEDECIN'){
            if(this.membres[i].patient){ this.authSer.getUnreadMsg(this.user.id,this.membres[i].patient.id,this.user.appUser.role).subscribe(data=>{
              this.membres[i].h=data;
            })}
          }
          else{
            if(this.membres[i].medecin){
              this.authSer.getUnreadMsg(this.user.id,this.membres[i].medecin.id,this.user.appUser.role).subscribe(data=>{
                this.membres[i].h=data;
              })
            }

          }
        }
      });
    })
  }

  getMembres(){
    this.authSer.getUser().subscribe(data=>{
      this.user=data;
      this.authSer.getMembresMsg(this.user.id,this.user.appUser.role).subscribe(data=>{
        this.membres=data;
        for(let i=0;i<this.membres.length;i++){
          if(this.user.appUser.role=='MEDECIN'){
            this.authSer.getUnreadMsg(this.user.id,this.membres[i].patient.id,this.user.appUser.role).subscribe(data=>{
              this.membres[i].h=data;
            })
          }
          else{
            this.authSer.getUnreadMsg(this.user.id,this.membres[i].medecin.id,this.user.appUser.role).subscribe(data=>{
              this.membres[i].h=data;
            })
          }
        }
        for(var i=0;i<this.membres.length;i++){
          if(this.user.appUser.role=='MEDECIN'){
            if(this.membres[i].patient.id==this.route.snapshot.params['id']){
              this.membre=this.membres[i];break;
            }
          }
          else{
            if(this.membres[i].medecin.id==this.route.snapshot.params['id']){
              this.membre=this.membres[i];break;
            }
          }

        }
      })


    })

  }

  async deailMsg(idPat,nom) {
    const modal = await this.modalCrtl.create({
      component: DetailMessageComponent,
      componentProps: {
        'idPat': idPat,
         'nomPat':nom
      }
    })
    await modal.present();
    this.ngOnInit()
  }
}

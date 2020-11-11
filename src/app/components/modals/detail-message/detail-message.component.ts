import {Component, OnInit, ViewChild} from '@angular/core';
import {IonContent, ModalController, NavParams} from '@ionic/angular';
import {AuthService} from '../../../services/auth-service/auth.service';
import {FormBuilder} from '@angular/forms';
import {WebSocketApiService} from '../../../services/web-socket/web-socket-api.service';

@Component({
  selector: 'app-detail-message',
  templateUrl: './detail-message.component.html',
  styleUrls: ['./detail-message.component.scss'],
})
export class DetailMessageComponent implements OnInit {
  contenu="";
  idMembre;
  user;
  role;
  messages;
  messagesSocket;
  nomPat;
  @ViewChild(IonContent) content: IonContent;
  constructor(private modalCrtl:ModalController,private nvParam:NavParams,private authSer:AuthService,private formBuilder:FormBuilder
      ,private websocketapi:WebSocketApiService) { }

  ngOnInit() {
    this.contenu="";
    this.nomPat=this.nvParam.get('nomPat');
    this.pushMessageRealTime();
    this.getMessages();

  }

  scrollToBottomOnInit() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom(400);
      }
    }, 500);
  }
  pushMessageRealTime(){
    let stompClient = this.websocketapi.connectMessage();

    stompClient.connect({}, frame => {

      // Subscribe to notification topic
      this.messagesSocket=stompClient.subscribe('/topic/messages', messages => {
        this.messagesSocket = JSON.parse(messages.body);
        // Update notifications attribute with the recent messsage sent from the server
        if(this.user.appUser.role=='MEDECIN'){
          if(this.messagesSocket[0].idPatient==this.nvParam.get("idPat")){
            this.messages = this.messagesSocket}
        }else {
          if(this.messagesSocket[0].idMedecin==this.nvParam.get("idPat")){this.messages = this.messagesSocket}
        }
            this.scrollToBottomOnInit()
      }

      )
    })

  }
  getMessages(){
    this.authSer.getUser().subscribe(data=>{
      this.user=data
      this.role=this.user.appUser.role;
      this.idMembre=this.nvParam.get("idPat");
      this.authSer.getMessages(this.user.id,this.idMembre,this.user.appUser.role).subscribe(data=>{
        this.messages=data;
        this.scrollToBottomOnInit();
      })
    })
  }


  dimissModal() {
    this.modalCrtl.dismiss()
  }

  sendMsg(f) {
    this.authSer.sendMessage(f).subscribe(data=>{
      this.ngOnInit();
    })

  }
}

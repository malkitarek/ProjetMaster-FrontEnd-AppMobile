import {Component, OnInit} from '@angular/core';

import {MenuController, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {AuthService} from './services/auth-service/auth.service';
import {ActivatedRoute, NavigationStart, Router, RouterState, RouterStateSnapshot} from '@angular/router';
import {WebSocketApiService} from './services/web-socket/web-socket-api.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  navigate: any;
  connecter;
  user;
  notifications;
  notifsNoread;
  messagesSocket;
  notifsSocket;
  mesgNoReaded;
  rt;
  notifIcon;
  msgIcon;
  constructor(
    private authSer: AuthService,
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private websocketapi:WebSocketApiService,
    private route:ActivatedRoute

  ) {
    this.initializeApp();
      router.events.forEach((event) => {
          if (event instanceof NavigationStart ) {

              if (event['url'] == '/notifications') {
                  this.notifIcon=1;
                  this.msgIcon=0;
              }else if (event['url'] == '/message') {
                  this.msgIcon=1;
                  this.notifIcon=0;
              }else{
                  this.notifIcon=0;
                  this.msgIcon=0;
              }
          }})
  }
  ngOnInit() {
      this.connecter=this.authSer.getEmail();
     if(this.connecter != null){
         this.authSer.getUser().subscribe(data=>{
             this.user=data;

         })
     }
     this.pushMessageRealTime();
     this.getNotification();
     this.getAllMessageNoReader();

  }

    getAllMessageNoReader(){
        this.authSer.getUser().subscribe(data=>{
            this.user=data;
            this.authSer.getAllMessageNoReader(this.user.id,this.user.appUser.role).subscribe(data=>{
                this.mesgNoReaded=data;

            });
        })
    }

  pushMessageRealTime(){
        let stompClient = this.websocketapi.connectMessage();
        stompClient.connect({}, frame => {

            // Subscribe to notification topic
            this.messagesSocket=stompClient.subscribe('/topic/allMessages', messages => {
                this.messagesSocket= JSON.parse(messages.body);
                if(this.user.appUser.role=='MEDECIN'){
                    if(this.messagesSocket[0].fromQui=='PATIENT' && this.messagesSocket[0].idMedecin==this.user.id) this.mesgNoReaded=this.messagesSocket.length;
                    if(this.messagesSocket[0].fromQui=='TAREK' && this.messagesSocket[0].idMedecin==this.user.id) this.mesgNoReaded=0
                }
                else{
                    if(this.messagesSocket[0].fromQui=='MEDECIN' && this.messagesSocket[0].idPatient==this.user.id)this.mesgNoReaded=this.messagesSocket.length;
                    if(this.messagesSocket[0].fromQui=='TAREK' && this.messagesSocket[0].idPatient==this.user.id) this.mesgNoReaded=0
                }
                // Update notifications attribute with the recent messsage sent from the server
            })
            this.notifsSocket=stompClient.subscribe('/topic/notifications', notifications => {
                this.notifsSocket= JSON.parse(notifications.body);
                if(this.user.appUser.role=="PATIENT"){
                    if(this.notifsSocket[0].idPatient==this.user.id && this.notifsSocket[0].fromQui=="MEDECIN")this.notifications=this.notifsSocket;

                }

                else {
                    if(this.notifsSocket[0].idMedecin==this.user.id && this.notifsSocket[0].fromQui=="PATIENT")this.notifications=this.notifsSocket;
                }
                let y=0;
                for(let i=0;i<this.notifications.length;i++){
                    if (this.notifications[i].readed==null)y=y+1
                }
                this.notifsNoread=y;
            })

        })
    }

    getNotification(){
        this.authSer.getUser().subscribe(data=>{
            this.user=data;
            this.authSer.getNotifications(this.user.id,this.user.appUser.role).subscribe(data=>{
                this.notifications=data;

                let y=0;
                for(let i=0;i<this.notifications.length;i++){
                    if (this.notifications[i].readed==null)y=y+1
                }
                this.notifsNoread=y;

            })
        })
    }

    initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


    lougout() {
        this.authSer.logout();
        this.router.navigateByUrl('/login');
        window.location.reload();
    }
}

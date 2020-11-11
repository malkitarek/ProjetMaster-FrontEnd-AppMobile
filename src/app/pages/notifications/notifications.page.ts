import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  user;
  notifications;
  notifsNoread;
  term;
  constructor(private authSer: AuthService,private router:Router) { }

  ngOnInit() {
    this.getNotification();
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
    onNotif(type) {
        if(type=='rendezVous'){
            this.router.navigateByUrl("/rendez-vous-p").then(() => {
                window.location.reload();
            });
        }
        if(type=='rendezVousValidation'){
            this.router.navigateByUrl("/rendez-vous").then(() => {
                window.location.reload();
            });
        }
    }

}

import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';
import {AuthService} from '../services/auth-service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  user;
  constructor(private authServ:AuthService) {

  }
  ngOnInit(){
   this.authServ.getUser().subscribe(data=>{
     this.user=data
   })
  }




}

import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public showprogressBar;
  public user;
  public mode;
  public messageError;
  constructor(private authSer:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onRegister(user) {
    this.showprogressBar=true;
    this.authSer.saveUser(user.value,0).subscribe(resp=>{
      this.showprogressBar=false;
      this.user=resp;
      this.router.navigateByUrl("/confirme/"+this.user.id)
    },err=>{
      console.log(err.error.message)
      this.mode=1;
      this.messageError=err.error.message;

    });

  }
}

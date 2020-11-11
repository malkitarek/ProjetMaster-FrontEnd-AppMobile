import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';
import {JwtHelper} from 'angular2-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public mode;
  public roles;

  constructor(private authSer:AuthService, private router:Router) { }

  ngOnInit() {
   /* if (this.authSer.getEmail()!=null) {
      this.router.navigateByUrl("/patients").then(() => {
        window.location.reload();
      });

    }*/
  }

  onLogin(user) {
    this.authSer.login(user.value).subscribe(resp=>{
      console.log(resp)
      let jwt = resp.headers.get("Authorization");

      let jwtHelper=new JwtHelper();
      this.roles=jwtHelper.decodeToken(jwt).roles;

      for (let r of this.roles){
        if(r.authority=="MEDECIN" || r.authority=="PATIENT") {
          this.authSer.saveToken(jwt);
          this.authSer.isConnected=true;

          this.router.navigateByUrl("/home").then(() => {
            window.location.reload();
          });
        }
        else {
          this.mode=1
        }}
      /*if(this.authSer.isAdmin(jwt)) {this.mode=1;}
      else {
        this.authSer.saveToken(jwt);
        this.router.navigateByUrl("/patients");
      }*/



    },err=>{
      console.log(err)
      this.mode=1;
      // this.messageError=err.error.message
    });
  }

}

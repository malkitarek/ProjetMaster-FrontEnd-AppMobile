import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-confirme',
  templateUrl: './confirme.page.html',
  styleUrls: ['./confirme.page.scss'],
})
export class ConfirmePage implements OnInit {
  id;
  mode;
  messageError;

  constructor(private authSer:AuthService,private router:Router) { }

  ngOnInit() {
  }
  onConfirme(code) {
    //this.id=this.activeRoute.snapshot.params.id;
    this.id = this.router.routerState.snapshot.url.split("/")[2];
    console.log(this.id)
    this.authSer.saveCode(code.value, this.id).subscribe(resp => {

      this.router.navigateByUrl("/login");
    }, err => {
      console.log(err)
      this.mode = 1;
      this.messageError = err.error.message;

    });
  }
}

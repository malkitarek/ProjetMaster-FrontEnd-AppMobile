import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.page.html',
  styleUrls: ['./medecin.page.scss'],
})
export class MedecinPage implements OnInit {
  medecins;
  term;
  user;
  constructor(private authSer:AuthService,private router :Router) { }

  ngOnInit() {
    this.getMedecinsTraitants();
  }

  getMedecinsTraitants(){
    this.authSer.getUser().subscribe(data=>{
      this.user=data;
      if(this.user.appUser.role=="PATIENT"){
        this.authSer.getMedecinsTraitants(this.user.id).subscribe(data=>{
          this.medecins=data;
        })
      }
    })
  }

  detailMed(id){
   this.router.navigateByUrl('detailMedecin/'+id);
  }

}

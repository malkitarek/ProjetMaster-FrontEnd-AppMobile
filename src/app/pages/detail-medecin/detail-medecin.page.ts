import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-medecin',
  templateUrl: './detail-medecin.page.html',
  styleUrls: ['./detail-medecin.page.scss'],
})
export class DetailMedecinPage implements OnInit {
  medecin;
  constructor(private authSer:AuthService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(({ id }) =>
        this.getMedecin(id)
    )
  }
  getMedecin(id){

    this.authSer.getMedecin(id).subscribe(data=>{
      this.medecin=data;

    })
  }

}

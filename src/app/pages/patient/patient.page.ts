import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.page.html',
  styleUrls: ['./patient.page.scss'],
})
export class PatientPage implements OnInit {
  patients;
  term = '';
  produits;
  user;
  constructor(private authSer:AuthService,private router:Router) {}

  ngOnInit() {

      this.authSer.getUser().subscribe(data=> {
          this.user = data
          this.authSer.getPatinets().subscribe(data => {
              this.patients = data;
          })
      })
  }


    detailPat(id) {
      this.router.navigateByUrl("/detailPatient/"+id);
    }
}

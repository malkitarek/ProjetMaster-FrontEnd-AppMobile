import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../services/auth-service/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogAffilMembrePage} from '../dialogs/dialog-affil-membre/dialog-affil-membre.page';

@Component({
  selector: 'app-detail-patient',
  templateUrl: './detail-patient.page.html',
  styleUrls: ['./detail-patient.page.scss'],
})
export class DetailPatientPage implements OnInit {
  id;
  pat;
  medecin;
  membres;
  patient={
    nom:"",
    prenom:"",
    appUser:{
      email:"",
      phone:"",

    },
    sexe:"",
    adresse:"",
    dateNaissance:"",
    x:-1
  };
  idPat;
  idMed;
  user;
  constructor(private authSer:AuthService,private route: ActivatedRoute,private router:Router,public dialog: MatDialog) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.authSer.getUser().subscribe(data=> {
      this.user = data
      this.authSer.getPatient(this.id).subscribe(data => {
        console.log(data)
        this.pat = data;
        this.patient.nom = this.pat.nom;
        this.patient.prenom = this.pat.prenom;
        this.patient.appUser = this.pat.appUser;
        this.patient.sexe = this.pat.sexe;
        this.patient.adresse = this.pat.adresse;
        this.patient.dateNaissance = this.pat.dateNaissance;

        this.authSer.getUser().subscribe(data => {
          this.medecin = data;
          this.authSer.getMembres(this.medecin.id).subscribe(data => {
            this.membres = data;
            let y = 0;
            for (var i = 0; i < this.membres.length; i++) {
              if (this.id == this.membres[i].id) {
                y = 1
              }
              let x;
              if (y == 1) this.patient.x = 1;
              else this.patient.x = 0;
            }
          })
        }, err => {
          console.log(err)
        });
      })
    })
  }

  affilier() {
    this.authSer.getUser().subscribe(data=> {
      this.medecin = data;
      this.id = this.route.snapshot.params['id'];
      this.authSer.affilerPatient(this.id,this.medecin.id).subscribe(data=>{
        this.router.navigateByUrl("/membres");
      })
    });
  }

    openDialog(idPat,idMed): void {
        this.idPat=idPat;
        this.idMed=idMed;
        const dialogRef = this.dialog.open(DialogAffilMembrePage, {
            width: '250px',
        });

        dialogRef.afterClosed().subscribe(result => {
            if(result==1)
                this.affilier();
        });

    }
}

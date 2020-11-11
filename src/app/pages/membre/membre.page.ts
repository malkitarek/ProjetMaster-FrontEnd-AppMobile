import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DialogSuppMembrePage} from '../dialogs/dialog-supp-membre/dialog-supp-membre.page';

@Component({
  selector: 'app-membre',
  templateUrl: './membre.page.html',
  styleUrls: ['./membre.page.scss'],
})
export class MembrePage implements OnInit {
  membres;
  term = '';
   user;
  idPat;
  idMed;

  constructor(private authSer:AuthService,private router: Router,public dialog: MatDialog) {}

  ngOnInit() {
      this.authSer.getUser().subscribe(data=>{
          this.user=data
          this.authSer.getMembres(this.user.id).subscribe(data=>{
              this.membres=data;
          })
      });
    /*this.authSer.getUser().subscribe(data=>{
      this.user=data
      this.authSer.getMembres(this.user.id).subscribe(data=>{
        this.membres=data;
      })
    });*/

  }

  getMembres(){
      this.authSer.getUser().subscribe(data=>{
          this.user=data
          this.authSer.getMembres(this.user.id).subscribe(data=>{
              this.membres=data;
          })
      });

  }
  detailPat(id) {
        this.router.navigateByUrl("/detailMembre/"+id)
    }

  suppPat(id) {

  }

  updatePat(id) {
     this.router.navigateByUrl("/updatePatient/"+id);
  }

  openDialog(idPat,idMed): void {
    this.idPat=idPat;
    this.idMed=idMed;
    const dialogRef = this.dialog.open(DialogSuppMembrePage, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result==1)
        this.delete();
    });

  }

  delete() {
      this.authSer.supprimer(this.idPat,this.idMed).subscribe(data=>{
          this.getMembres()

      },err=>{
          console.log(err)
      })
  }
}

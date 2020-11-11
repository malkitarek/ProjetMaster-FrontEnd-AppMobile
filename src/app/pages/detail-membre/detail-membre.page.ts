import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {AntecedentsFamiliauxComponent} from '../../components/modals/antecedents-familiaux/antecedents-familiaux.component';
import {MaladiesComponent} from '../../components/modals/maladies/maladies.component';
import {HabitudesToxiquesComponent} from '../../components/modals/habitudes-toxiques/habitudes-toxiques.component';
import {MedecinsTraitantsComponent} from '../../components/modals/medecins-traitants/medecins-traitants.component';
import {ConsulationComponent} from '../../components/modals/consulation/consulation.component';
import {MatDialog} from '@angular/material/dialog';
import {DialogSuppConsultationPage} from '../dialogs/dialog-supp-consultation/dialog-supp-consultation.page';
import {AddConsulationComponent} from '../../components/modals/add-consulation/add-consulation.component';

@Component({
  selector: 'app-detail-membre',
  templateUrl: './detail-membre.page.html',
  styleUrls: ['./detail-membre.page.scss'],
})
export class DetailMembrePage implements OnInit {
  patient;
  id;
  medecin;
  step = 0;
  medecinsTraitants;

  visible: boolean = true;
  searchText;
  consultations;
  p;
  idCons;
  consultation;
  step0 = 0;
  chanels;
    term;
    user;

  setStep(index: number) {
    this.step = index;

  }

  constructor(private authSer:AuthService,private router:Router,private dialog: MatDialog,private route:ActivatedRoute,private modalCrl:ModalController) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.getChanels();
    this.authSer.getUser().subscribe(data => {
      this.medecin = data
      this.authSer.getMembre(this.id, this.medecin.id).subscribe(data => {
        this.patient = data;

        this.authSer.getConsulations(this.patient.id, this.medecin.id).subscribe(data => {
            console.log(data)
          this.consultations = data
        })
      })
    })

    this.authSer.getMedecinsTraitants(this.id).subscribe(data => {

      this.medecinsTraitants = data;
    })

  }

    async openConsultation(cons) {
        const modal = await this.modalCrl.create({
            component: ConsulationComponent,
            componentProps: {
                'consultation': cons
            }
        })
        await modal.present();

    }

  async openAntecedentFamiliaux() {

    const modal = await this.modalCrl.create({
      component: AntecedentsFamiliauxComponent,
      componentProps: {
        'antecedentsFamiliaux': this.patient.dossierMedecal.antecedentsFamiliaux
      }
    })
     await modal.present();
  }



  async openMaladies() {
      const modal = await this.modalCrl.create({
          component: MaladiesComponent,
          componentProps: {
              'maladies': this.patient.dossierMedecal.maladies
          }
      })
      await modal.present();

  }

    async openhabitudes() {
        const modal = await this.modalCrl.create({
            component: HabitudesToxiquesComponent,
            componentProps: {
                'habitudesToxiques': this.patient.dossierMedecal.habitudesToxiques
            }
        })
        await modal.present();
    }

    async openmedecins() {
        const modal = await this.modalCrl.create({
            component: MedecinsTraitantsComponent,
            componentProps: {
                'medecinsTraitants': this.medecinsTraitants
            }
        })
        await modal.present();
    }

    suppCons(idCons) {
        this.idCons = idCons;
        const dialogRef=this.dialog.open(DialogSuppConsultationPage);
        dialogRef.afterClosed().subscribe(data=>{
            if(data==1)
                this.delete()
        })
    }

    delete() {
        this.authSer.deleteCons(this.idCons).subscribe(data => {
            this.router.navigateByUrl("/detailMembre/"+this.id)
        });
    }

    async openAddCons() {
        const modal = await this.modalCrl.create({
            component: AddConsulationComponent,
            componentProps: {
                'patient': this.patient,
                'medecin': this.medecin
            }
        })
        await modal.present();
    }

    async editCons(cons) {
        const modal = await this.modalCrl.create({
            component: AddConsulationComponent,
            componentProps: {
                'patient': this.patient,
                'medecin': this.medecin,
                'cons':cons
            }
        })
        await modal.present();
    }
    getChanels() {
        this.id = this.route.snapshot.params['id'];
        this.authSer.getUser().subscribe(data=> {
            this.user = data
            this.authSer.getChanel(this.id).subscribe(data => {
                this.chanels = data;

            }, err => {
                console.log(err)
            })
        })
    }

    getChanelPat(idPat, idChanle, nomCapt) {
        if(nomCapt=="temprature"){
            this.router.navigate(['/detail-chanel'], { queryParams: { patient_id: idPat,chanel_id:idChanle,feild_nom:'temp'} });
        }
        else if(nomCapt=="ECG"){
            this.router.navigate(['/detail-chanel'], { queryParams: { patient_id: idPat,chanel_id:idChanle,feild_nom:'ECG wave'} });
        }
        else if(nomCapt=="Blood Pressure"){
            this.router.navigate(['/detail-chanel'], { queryParams: { patient_id: idPat,chanel_id:idChanle,feild_nom:'diastolic'} });
        }
        else if(nomCapt=="Spo2"){
            this.router.navigate(['/detail-chanel'], { queryParams: { patient_id: idPat,chanel_id:idChanle,feild_nom:'spo2'} });
        }

    }

}

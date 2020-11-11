import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {FormBuilder} from '@angular/forms';
import {AuthService} from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-cal-modal',
  templateUrl: './cal-modal.page.html',
  styleUrls: ['./cal-modal.page.scss'],
})
export class CalModalPage implements OnInit {



  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
    medecin;
    membres;
    formRendezVous;
    rendezVous;


  constructor(private formBuilder:FormBuilder,private authSer:AuthService,private modalCtrl:ModalController,private nvParam:NavParams) {
      this.rendezVous=this.nvParam.get("rendezVous");
      this.medecin=this.nvParam.get("medecin");
      this.formRendezVous=this.formBuilder.group({
           id:[this.rendezVous?this.rendezVous.id:''],
           idMedecin:[this.rendezVous?this.rendezVous.idMedecin:this.medecin.id],
           idPatient:[this.rendezVous?this.rendezVous.idPatient:''],
           titre:[this.rendezVous?this.rendezVous.title:''],
           description:[this.rendezVous?this.rendezVous.description:''],
           dateDebut:[this.rendezVous?this.rendezVous.startTime:''],
           dateFin:[this.rendezVous?this.rendezVous.endTime:''],
          validation:[this.rendezVous?this.rendezVous.validation:'']
          }

      )
  }

  ngOnInit() {
      this.getMembres();

  }

  save() {

          this.authSer.saveRendezVous(this.formRendezVous.value).subscribe(data=>{
              this.modalCtrl.dismiss();
              window.location.reload();

          })


  }
    getMembres(){
        this.authSer.getUser().subscribe(data=>{
            this.medecin=data;
            this.authSer.getMembres(this.medecin.id).subscribe(data=>{
                this.membres=data;
            })
        })
    }



    close() {
    this.modalCtrl.dismiss();
  }


    delete(id) {
        this.authSer.deleteRendez(id).subscribe(data=>{
            this.modalCtrl.dismiss();
            window.location.reload();
        })
    }
}

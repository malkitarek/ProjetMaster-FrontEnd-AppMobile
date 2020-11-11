import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar';
import {AuthService} from '../../services/auth-service/auth.service';
import {AlertController, ModalController} from '@ionic/angular';
import {CalModalPage} from '../cal-modal/cal-modal.page';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.page.html',
  styleUrls: ['./rendez-vous.page.scss'],
})
export class RendezVousPage implements OnInit {
  eventSource=[]
  viewTitle: string
   calendar={
      mode:'month',
      currentDate:new Date()
   }
   @ViewChild(CalendarComponent) myCal:CalendarComponent

   medecin;
   rendezVous=[];
   dataSource;
  constructor(private authSer:AuthService,private modalCrtl:ModalController,
              private alertCtrl: AlertController,
              @Inject(LOCALE_ID) private locale: string,) { }

  ngOnInit() {
      this.authSer.getUser().subscribe(data=>{
          this.medecin=data;
          this.authSer.getRendezVous(this.medecin.id).subscribe(data=>{
              console.log(data);
              this.dataSource=data
              for (var i = 0; i < this.dataSource.length; i += 1) {
                  this.rendezVous.push({
                      title: this.dataSource[i].titre,
                      startTime: new Date(this.dataSource[i].dateDebut),
                      endTime: new Date(this.dataSource[i].dateFin),
                      description: this.dataSource[i].description,
                      validation: this.dataSource[i].validation,
                      idPatient:  this.dataSource[i].idPatient,
                      idMedecin:  this.dataSource[i].idMedecin,
                      id: this.dataSource[i].id,
                  })
              }
              this.eventSource=this.rendezVous

          })
      })
  }
    next() {
        this.myCal.slideNext();
    }

    back() {
        this.myCal.slidePrev();
    }

    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    async onEventSelected(event) {
      console.log(event)
        // Use Angular date pipe for conversion

        const modal = await this.modalCrtl.create({
            component: CalModalPage,
            cssClass: 'cal-modal',
            backdropDismiss: false,
            componentProps: {
                'rendezVous': event,
            }
        });

        await modal.present();

        // alert.present();
    }



    async openCalModal() {
        const modal = await this.modalCrtl.create({
            component: CalModalPage,
            cssClass: 'cal-modal',
            backdropDismiss: false,
            componentProps:{
                'medecin':this.medecin,
            }
        });

        await modal.present();

        modal.onDidDismiss().then((result) => {
            if (result.data && result.data.event) {
                let event = result.data.event;
                if (event.allDay) {
                    let start = event.startTime;
                    event.startTime = new Date(
                        Date.UTC(
                            start.getUTCFullYear(),
                            start.getUTCMonth(),
                            start.getUTCDate()
                        )
                    );
                    event.endTime = new Date(
                        Date.UTC(
                            start.getUTCFullYear(),
                            start.getUTCMonth(),
                            start.getUTCDate() + 1
                        )
                    );
                }
                this.eventSource.push(result.data.event);
                this.myCal.loadEvents();
            }
        });
    }
}

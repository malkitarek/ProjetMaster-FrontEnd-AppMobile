import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/guard/auth-guard.service';
import {GaurdInverseService} from './services/guard/guard-inverse.service';
import {GaurdMService} from './services/guard/guard-m.service';
import {GaurdPService} from './services/guard/guard-p.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    canActivate:[AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate:[GaurdInverseService]
  },

  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule),
    canActivate:[GaurdInverseService]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[GaurdInverseService]

  },

  {
    path: 'confirme/:id',
    loadChildren: () => import('./pages/confirme/confirme.module').then( m => m.ConfirmePageModule),
    canActivate:[GaurdInverseService]
  },
  {
    path: 'patients',
    loadChildren: () => import('./pages/patient/patient.module').then( m => m.PatientPageModule),
    canActivate:[GaurdMService]
  },
  {
    path: 'createPatient',
    loadChildren: () => import('./pages/create-patient/create-patient.module').then( m => m.CreatePatientPageModule),
    canActivate:[GaurdMService]
  },
  {
    path: 'detailPatient/:id',
    loadChildren: () => import('./pages/detail-patient/detail-patient.module').then( m => m.DetailPatientPageModule),
    canActivate:[GaurdMService]
  },

  {
    path: 'detailMembre/:id',
    loadChildren: () => import('./pages/detail-membre/detail-membre.module').then( m => m.DetailMembrePageModule),
    canActivate:[GaurdMService]
  },

  {
    path: 'updatePatient/:id',
    loadChildren: () => import('./pages/update-patient/update-patient.module').then( m => m.UpdatePatientPageModule),
    canActivate:[GaurdMService]
  },
  {
    path: 'membres',
    loadChildren: () => import('./pages/membre/membre.module').then( m => m.MembrePageModule),
    canActivate:[GaurdMService]
  },


  {
    path: 'rendez-vous',
    loadChildren: () => import('./pages/rendez-vous/rendez-vous.module').then( m => m.RendezVousPageModule),
    canActivate:[GaurdMService]
  },

  {
    path: 'device',
    loadChildren: () => import('./pages/device/device.module').then( m => m.DevicePageModule),
    canActivate:[GaurdMService]
  },
  {
    path: 'detail-chanel',
    loadChildren: () => import('./pages/detail-chanel/detail-chanel.module').then( m => m.DetailChanelPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'message',
    loadChildren: () => import('./pages/message-m-p/message-m-p.module').then( m => m.MessageMPPageModule),
    canActivate:[AuthGuardService]
  },
  {
    path: 'medecins',
    loadChildren: () => import('./pages/medecin/medecin.module').then( m => m.MedecinPageModule),
    canActivate:[GaurdPService]
  },
  {
    path: 'services',
    loadChildren: () => import('./pages/service/service.module').then( m => m.ServicePageModule),
    canActivate:[GaurdPService]
  },
  {
    path: 'donnees',
    loadChildren: () => import('./pages/donnee/donnee.module').then( m => m.DonneePageModule),
    canActivate:[GaurdPService]
  },
  {
    path: 'rendez-vous-p',
    loadChildren: () => import('./pages/rendez-vous-p/rendez-vous-p.module').then( m => m.RendezVousPPageModule),
    canActivate:[GaurdPService]
  },
  {
    path: 'detailMedecin/:id',
    loadChildren: () => import('./pages/detail-medecin/detail-medecin.module').then( m => m.DetailMedecinPageModule),
    canActivate:[GaurdPService]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

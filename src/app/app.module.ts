import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouteReuseStrategy, RouterStateSnapshot} from '@angular/router';

import {IonButton, IonButtons, IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpBackend, HttpClientModule, HttpXhrBackend} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NativeHttpBackend, NativeHttpFallback, NativeHttpModule} from 'ionic-native-http-connection-backend';
import {MatCardModule} from '@angular/material/card';








@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      NativeHttpModule,
      BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,
      FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
      MatCardModule,

 ],
  providers: [
    StatusBar,
      {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

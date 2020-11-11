import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelper} from 'angular2-jwt';

import {from} from 'rxjs';
import {map} from 'rxjs/operators';
import {HTTP} from '@ionic-native/http/ngx';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
    //public host="http://localhost:8888"
  //public host="http://192.168.43.17:8888"
  public host="http://192.168.99.100:30006"
  public jwtToken=null;
  public roles;
  public isConnected :boolean=false;
  constructor(private http:HttpClient) { }
  /******************************************************** Authentification **********************************************************/
  getProd(){
    return this.http.get("http://localhost:8089/produits");
    //return from(this.http.get("http://192.168.43.17:8089/produits", {}, {})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  login(user){
    return this.http.post(this.host+"/login",user,{observe:'response'});
    //return from(this.http.post(this.host+"/login",JSON.stringify(user),{observe:'response'})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  saveToken(jwt) {
    localStorage.setItem('token',jwt);
  }
  loadToken(){
    this.jwtToken=localStorage.getItem("token");
  }

  logout(){
    this.jwtToken=null;
    localStorage.removeItem('token');
  }

  saveUser(user,etat) {
   //return this.http.post(this.host+'/register/'+etat,user);
    return from(this.http.post(this.host+'/register/'+etat,user,{})).pipe(map((data: any) => JSON.parse(data?.data)));

  }
  saveCode(code,id) {
   // return this.http.post(this.host+'/confirme/'+id,code);
    return from(this.http.post(this.host+'/confirm/'+id,code,{})).pipe(map((data: any) => JSON.parse(data?.data)));
  }


  /**************************************************** Gestion de médecin ***********************************************************/
  getEmail(){
    this.jwtToken=localStorage.getItem("token");
    let jwtHelper=new JwtHelper();
    if(this.jwtToken!=null) return jwtHelper.decodeToken(this.jwtToken).sub
    else return null;
  }
  getRole(){
    this.jwtToken=localStorage.getItem("token");
    let jwtHelper=new JwtHelper();
    if(this.jwtToken!=null) return jwtHelper.decodeToken(this.jwtToken).roles[0].authority
    else return null;
  }

  getUser(){
    if(this.getRole()=="MEDECIN")
     return  this.http.get(this.host+'/suivi-patient-service/medecin/'+this.getEmail(),{headers:new HttpHeaders({'Authorization':this.jwtToken})});
      //return from(this.http.get(this.host+'/suivi-patient-service/medecin/'+this.getEmail(),{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
    else if(this.getRole()=="PATIENT")
      return  this.http.get(this.host+'/suivi-patient-service/patient/'+this.getEmail(),{headers:new HttpHeaders({'Authorization':this.jwtToken})});
      //return from(this.http.get(this.host+'/suivi-patient-service/patient/'+this.getEmail(),{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getServices() {
    return this.http.get(this.host+"/suivi-patient-service/services",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+'/suivi-patient-service/services',{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }



  /******************************************************* Gestion des patients **********************************************************/
  getPatinets() {
    return this.http.get(this.host+'/suivi-patient-service/patients',{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/patients',{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  getPatient(idPat) {
    return this.http.get(this.host+'/suivi-patient-service/patientchanel/'+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/patientchanel/'+idPat,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  getMembres(idMed) {
   return this.http.get(this.host+'/suivi-patient-service/membres/'+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+'/suivi-patient-service/membres/'+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  affilerPatient(idPat,idMed){
    return this.http.get(this.host+'/suivi-patient-service/affilier/'+idPat+'/'+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/affilier/'+idPat+'/'+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  supprimer(idPat,idMed) {
    return this.http.get(this.host+"/suivi-patient-service/supprimer/"+idPat+"/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/supprimer/'+idPat+'/'+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  savePatient(patient){
  //  return this.http.post(this.host+"/suivi-patient-service/patients",patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    return from(this.http.post(this.host+'/suivi-patient-service/patients',patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }


  getMembre(idPat, idMed) {
    return this.http.get(this.host+"/suivi-patient-service/patients/"+idPat+"/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+'/suivi-patient-service/patients/'+idPat+'/'+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  updatePatient(patient,idPat) {
    return this.http.put(this.host+"/suivi-patient-service/patients/"+idPat,patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.put(this.host+'/suivi-patient-service/patients/'+idPat,patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getMedecinsTraitants(idPat){
    return this.http.get(this.host+"/suivi-patient-service/medecinsTraitants/"+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/medecinsTraitants/'+idPat,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /********************************************** Gestion des consultation ************************************************************/

  saveConsulation(consulation) {
    return this.http.post(this.host+"/suivi-patient-service/consulations",consulation,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.post(this.host+'/suivi-patient-service/consultations/',consulation,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getConsulations(idPat, idMed) {
    return this.http.get(this.host+"/suivi-patient-service/consulations/"+idPat+"/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/suivi-patient-service/consultations/'+idPat+'/'+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  deleteCons(idCons) {
   return this.http.delete(this.host+"/suivi-patient-service/consulations/"+idCons,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.delete(this.host+'/suivi-patient-service/consultations/'+idCons,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /************************************************** Gestion des devices *******************************************************/
  getDevices(){
    return  this.http.get(this.host+"/device-service/devices",{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+'/device-service/devices',{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  saveDevice(device) {

    return this.http.post(this.host+"/device-service/devices",device,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.post(this.host+'/device-service/devices',device,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  deleteDevice(id,idPat) {
    return this.http.delete(this.host+"/device-service/devices/"+id+"/"+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.delete(this.host+'/device-service/devices/'+id+'/'+idPat,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getDevice(id) {

    return this.http.get(this.host+"/device-service/devices/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})})
    //return from(this.http.get(this.host+'/device-service/devices/'+id,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));

  }

  updateDevice(device) {
    return this.http.put(this.host+"/device-service/devices",device,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.put(this.host+'/device-service/devices',device,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  //getCapteurs() {return this.http.get(this.host+"/device-service/capteurs",{headers:new HttpHeaders({'Authorization':this.jwtToken})});}

  // getDeviceCapteurs(idDev) {return this.http.get(this.host+"/device-service/capteurs/"+idDev,{headers:new HttpHeaders({'Authorization':this.jwtToken})});}

  /***********************************************************************fin Device **************************************************/

  /************************************ list chanels *********************************************************/

  getChanel(idPat) {
   return this.http.get(this.host+"/device-service/chanels/"+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+'/device-service/chanels/'+idPat,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getDonnees(idPat, idChanel,nomFeild) {

    return this.http.get(this.host+"/device-service/donnees?patient_id="+idPat+"&chanel_id="+idChanel+"&feild_nom="+nomFeild,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/device-service/donnees?patient_id="+idPat+"&chanel_id="+idChanel+"&feild_nom="+nomFeild,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  getLastMesure(idPat, idChanel, nomFeild) {
    return this.http.get(this.host+"/device-service/lastDonnees?patient_id="+idPat+"&chanel_id="+idChanel+"&feild_nom="+nomFeild,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/device-service/lastDonnees?patient_id="+idPat+"&chanel_id="+idChanel+"&feild_nom="+nomFeild,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }
  getFeilds(idPat,idChanel) {
    return this.http.get(this.host+"/device-service/feilds?patient_id="+idPat+"&chanel_id="+idChanel,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/device-service/feilds?patient_id="+idPat+"&chanel_id="+idChanel,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /****************************************** gestion messagerie******************************************************/
  getUserLastMsg(idUser,roleUser){
  return this.http.get(this.host+"/communication-service/messageLast/"+idUser+"/"+roleUser,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  //  return from(this.http.get(this.host+"/communication-service/messageLast/"+idUser+"/"+roleUser,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getMessages(idMed, idPat,role) {
    return this.http.get(this.host+"/communication-service/messages/"+idMed+"/"+idPat+"/"+role,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/communication-service/messages/"+idMed+"/"+idPat+"/"+role,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  sendMessage(message) {
    return this.http.post(this.host+"/communication-service/messages",message,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.post(this.host+"/communication-service/messages",message,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getUnreadMsg(idUser, idMem,role) {
    return this.http.get(this.host+"/communication-service/messagesUnread/"+idUser+"/"+idMem+"/"+role,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/communication-service/messagesUnread/"+idUser+"/"+idMem+"/"+role,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getAllMessageNoReader(idUser,fromQui) {
    return this.http.get(this.host+"/communication-service/allmessagesUnread/"+idUser+"/"+fromQui,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/communication-service/allmessagesUnread/"+idUser+"/"+fromQui,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getMembresMsg(idUser,roleUser) {
   return this.http.get(this.host+"/communication-service/membresMsg/"+idUser+"/"+roleUser,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/communication-service/membresMsg/"+idUser+"/"+roleUser,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /******************************************** Gestion rendez vous **********************************************/
  getRendezVous(idMed) {
    return this.http.get(this.host+"/communication-service/rendezVous/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/communication-service/rendezVous/"+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getRendezVousMedLast(idMed) {
    return this.http.get(this.host+"/communication-service/rendezVousMlast/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.get(this.host+"/communication-service/rendezVousMLast/"+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  saveRendezVous(rendez) {
    return this.http.post(this.host+"/communication-service/rendezVous",rendez,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
    //return from(this.http.post(this.host+"/communication-service/rendezVous",rendez,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  deleteRendez(id) {
   return this.http.delete(this.host+"/communication-service/rendezVous/"+id,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.delete(this.host+"/communication-service/rendezVous/"+id,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  updateRendez(rendez) {
    return this.http.put(this.host+"/communication-service/rendezVous",rendez,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.put(this.host+"/communication-service/rendezVous",rendez,{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getRendezVousP(idPat) {
    return this.http.get(this.host+"/communication-service/rendezVousP/"+idPat,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/communication-service/rendezVous/"+idPat,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  validerRendez(idRendez) {
    return this.http.get(this.host+"/communication-service/validerRendez/"+idRendez,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/communication-service/validerRendez/"+idRendez,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  getNotifications(idUser, role) {
    return this.http.get(this.host+"/communication-service/notifications/"+idUser+"/"+role,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/communication-service/notifications/"+idUser+"/"+role,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /****************** gestion medecins pour un patient********************************************************/
  getMedecin(idMed) {
    return this.http.get(this.host+"/suivi-patient-service/medecins/"+idMed,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
   // return from(this.http.get(this.host+"/suivi-patient-service/medecins/"+idMed,{},{headers:new HttpHeaders({'Authorization':this.jwtToken})})).pipe(map((data: any) => JSON.parse(data?.data)));
  }

  /*******************************************profile******************************************/
  editProfileMed(medecin,idMed) {
    return this.http.put(this.host+"/suivi-patient-service/profileEditMed/"+idMed,medecin,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }
  editProfilePat(patient,idPat) {
    return this.http.put(this.host+"/suivi-patient-service/profileEditPat/"+idPat,patient,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

  changeMdp(change,username) {
    return this.http.post(this.host+'/change/'+username,change,{headers:new HttpHeaders({'Authorization':this.jwtToken})});
  }

}

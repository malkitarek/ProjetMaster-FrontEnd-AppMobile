import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';
import {Injectable} from '@angular/core';
import {AuthService} from './services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PatDeviceValidator {

  private timeout;

  constructor(private readonly http: HttpClient,private authSer :AuthService) {
  }

  validatePatient(control: AbstractControl): Promise<{ [key: string]: boolean }> {
    clearTimeout(this.timeout);

    const value = control.value;

    // do not call server when input is empty or shorter than 2 characters
    if (!value || value.length < 2) {
      return Promise.resolve(null);
    }

    return new Promise((resolve, reject) => {
      this.timeout = setTimeout(() => {

         // this.http.get("http://192.168.43.17:8888/device-service/device/"+control.value+"/"+control.root.get('id').value,{headers:new HttpHeaders({'Authorization':this.authSer.jwtToken})})
        this.http.get("http://192.168.99.100:30006/device-service/device/"+control.value+"/"+control.root.get('id').value,{headers:new HttpHeaders({'Authorization':this.authSer.jwtToken})})
        //this.http.get("http://localhost:8888/device-service/device/"+control.value+"/"+control.root.get('id').value,{headers:new HttpHeaders({'Authorization':this.authSer.jwtToken})})
          .subscribe(flag => {
              if (flag) {
                resolve({'patientTaken': true});
              } else {
                resolve(null);
              }
            },
            (err) => {
              console.log(err);
            }
          );
      }, 200);
    });
  }



}

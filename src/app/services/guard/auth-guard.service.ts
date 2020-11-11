import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from '../auth-service/auth.service';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,private authServ:AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.authServ.loadToken();
    if (!tokenNotExpired('token', this.authServ.jwtToken) ) {
      this.router.navigate(["login"]);
      return false;
    }


    return true;
  }

}

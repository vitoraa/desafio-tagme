import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor (public login: LoginService, public router: Router) { }

  canActivate (): boolean {
    var isAuthenticated = this.login.isAuthenticated()
    if (!isAuthenticated) {
      this.router.navigate([''])
    }
    return isAuthenticated
  }

}

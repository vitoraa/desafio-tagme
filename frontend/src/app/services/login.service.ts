import { Injectable } from '@angular/core';
import { Login } from '../components/login/shared/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: Login

  constructor () { }

  login (login: Login) {
    var { userName, password } = login
    if (userName === 'admin' && password === 'admin') {
      this.loggedUser = login
      return true
    }
    return false
  }

  isAuthenticated () {
    return !!this.loggedUser
  }
}

import { Injectable } from '@angular/core';
import { Login } from '../components/login/shared/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser: Login
  logged: boolean = false

  constructor () { }

  login (login: Login): boolean {
    var { userName, password } = login
    if (userName === 'admin' && password === 'admin') {
      this.loggedUser = login
      this.logged = true
      return true
    }
    return false
  }

  logout () {
    this.logged = false
  }

  isAuthenticated () {
    return !!this.loggedUser
  }
}

import { Injectable } from '@angular/core';
import { Login } from '../components/login/shared/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor () { }

  login (login: Login) {
    var { userName, password } = login
    if (userName === 'admin' && password === 'admin') {
      return true;
    }
    return false;
  }
}

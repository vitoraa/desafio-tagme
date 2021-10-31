import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Login } from './shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private loginService: LoginService) { }

  ngOnInit (): void {
  }

  login (login: Login): void {
    this.loginService.login(login);
  }

}

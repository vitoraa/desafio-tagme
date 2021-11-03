import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Login } from './shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private loginService: LoginService, private router: Router) { }

  ngOnInit (): void {
  }

  login (login: Login): void {
    var logged: boolean = this.loginService.login(login)
    if (logged) {
      this.router.navigate(['/receitas']);
    } else {
      alert('Usuário ou senha inválidos');
    }
  }

}

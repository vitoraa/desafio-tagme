import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../shared/login';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  @Output() onLogin: EventEmitter<Login> = new EventEmitter()

  constructor () { }

  ngOnInit (): void {
    this.createForm(new Login())
  }

  createForm (login: Login) {
    this.loginForm = new FormGroup({
      userName: new FormControl(login.userName),
      password: new FormControl(login.password)
    })
  }

  resetFields () {
    this.createForm(new Login())
  }

  onSubmit () {
    this.onLogin.emit(this.loginForm.value)
    this.resetFields()
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { faUtensils, faList, faUser } from '@fortawesome/free-solid-svg-icons'
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser
  faUtensils = faUtensils
  faList = faList

  @Output() onSearchRecipe: EventEmitter<string> = new EventEmitter()
  searchText: string = ''

  constructor (private loginService: LoginService, private router: Router) { }

  ngOnInit (): void {
  }

  onSubmitSearch (): void {
    this.onSearchRecipe.emit(this.searchText);
  }

  logout (): void {
    this.loginService.logout()
    this.router.navigate(['/'])
    console.log('logout')
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faUtensils, faList, faUser } from '@fortawesome/free-solid-svg-icons'

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

  constructor () { }

  ngOnInit (): void {
  }

  onSubmitSearch (): void {
    this.onSearchRecipe.emit(this.searchText);
  }

}

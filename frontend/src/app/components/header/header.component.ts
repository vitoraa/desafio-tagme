import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSearchRecipe: EventEmitter<string> = new EventEmitter()
  searchText: string = ''

  constructor () { }

  ngOnInit (): void {
  }

  onSubmitSearch (): void {
    this.onSearchRecipe.emit(this.searchText);
  }

}

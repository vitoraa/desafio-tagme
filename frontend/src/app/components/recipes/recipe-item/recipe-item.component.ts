import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Recipe } from '../../../entities/Recipe';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  url = environment.basicPath

  @Input() recipe: Recipe

  constructor () { }

  ngOnInit (): void {
  }

}

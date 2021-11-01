import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail-ingredients',
  templateUrl: './recipe-detail-ingredients.component.html',
  styleUrls: ['./recipe-detail-ingredients.component.css']
})
export class RecipeDetailIngredientsComponent implements OnInit {

  @Input() recipe: Recipe

  constructor () { }

  ngOnInit (): void {
  }

}

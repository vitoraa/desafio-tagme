import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../entities/Recipe';
import { RecipeService } from '../../../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() searchText: string

  recipes: Recipe[] = []

  constructor (private recipeService: RecipeService) { }

  ngOnInit (): void {
    this.getAllRecipes()
  }

  getAllRecipes () {
    this.recipeService.getRecipes().subscribe((recipes) => this.recipes = recipes)
  }

}

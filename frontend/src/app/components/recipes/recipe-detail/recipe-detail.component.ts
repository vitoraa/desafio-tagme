import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor (private activatedRoute: ActivatedRoute) {
  }

  recipe: Recipe
  numberOfIngrediemtsSelected: number = 0
  numberOfStepsSelected: number = 0

  //TODO: pass recipe name or another more readable parameter
  ngOnInit () {
    var id = this.activatedRoute.snapshot.paramMap.get('id')
    this.recipe = history.state
  }

  percentageOfRecipeFinished (): number {
    var numberOfItems = this.recipe.ingredients.length + this.recipe.steps.length
    var numberOfItemsFinished = this.numberOfIngrediemtsSelected + this.numberOfStepsSelected
    var percentageOfItemsSelected = numberOfItemsFinished / numberOfItems * 100
    return percentageOfItemsSelected
  }

  setNumberOfSelectedIngredients (numberOfIngredients: number) {
    this.numberOfIngrediemtsSelected = numberOfIngredients
  }

  setNumberOfSelectedSteps (numberOfSteps: number) {
    this.numberOfStepsSelected = numberOfSteps
  }

}

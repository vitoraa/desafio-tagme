import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail-ingredients',
  templateUrl: './recipe-detail-ingredients.component.html',
  styleUrls: ['./recipe-detail-ingredients.component.css']
})
export class RecipeDetailIngredientsComponent implements OnInit {

  @Output() onSelectIngredient: EventEmitter<number> = new EventEmitter<number>()
  @Input() recipe: Recipe
  selectedIngredients: string[] = []

  constructor () { }

  ngOnInit (): void {
  }

  updateSelectedIngredients (event: Event, ingredientName: string): void {
    const isChecked = (<HTMLInputElement>event.target).checked
    if (isChecked) {
      this.selectedIngredients.push(ingredientName)
    } else {
      this.selectedIngredients = this.selectedIngredients.filter(name => name !== ingredientName)
    }
    this.onSelectIngredient.emit(this.selectedIngredients.length)
  }

}

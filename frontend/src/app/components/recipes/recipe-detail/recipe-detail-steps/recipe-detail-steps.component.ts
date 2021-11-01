import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail-steps',
  templateUrl: './recipe-detail-steps.component.html',
  styleUrls: ['./recipe-detail-steps.component.css']
})
export class RecipeDetailStepsComponent implements OnInit {

  @Input() recipe: Recipe
  selectedSteps: number[] = []

  constructor () { }

  ngOnInit (): void {
  }

  updateSelectedOrders (event: Event, orderStep: number): void {
    const isChecked = (<HTMLInputElement>event.target).checked
    if (isChecked) {
      this.selectedSteps.push(orderStep)
    } else {
      this.selectedSteps = this.selectedSteps.filter(step => step !== orderStep)
    }
    console.log(this.selectedSteps)
  }

  isAllStepsSelected (): boolean {
    return this.selectedSteps.length === this.recipe.steps.length
  }

}

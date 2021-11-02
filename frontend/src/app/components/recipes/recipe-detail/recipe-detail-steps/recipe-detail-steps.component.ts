import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail-steps',
  templateUrl: './recipe-detail-steps.component.html',
  styleUrls: ['./recipe-detail-steps.component.css']
})
export class RecipeDetailStepsComponent implements OnInit {

  @Output() onSelectStep: EventEmitter<number> = new EventEmitter<number>()
  @Input() recipe: Recipe
  selectedSteps: number[] = []

  constructor () { }

  ngOnInit (): void {
  }

  updateSelectedSteps (event: Event, orderStep: number): void {
    const isChecked = (<HTMLInputElement>event.target).checked
    if (isChecked) {
      this.selectedSteps.push(orderStep)
    } else {
      this.selectedSteps = this.selectedSteps.filter(step => step !== orderStep)
    }
    this.onSelectStep.emit(this.selectedSteps.length)
  }

}

import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-progress',
  templateUrl: './recipe-progress.component.html',
  styleUrls: ['./recipe-progress.component.css']
})
export class RecipeProgressComponent implements OnInit {

  @Input() percentageOfStepsSelected: number

  constructor () { }

  ngOnInit (): void {
  }

  onFinishRecipe () {
    console.log(this.percentageOfStepsSelected)
  }

  isRecipeFinished (): boolean {
    return this.percentageOfStepsSelected === 100
  }

}

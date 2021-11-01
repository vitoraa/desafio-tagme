import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';

@Component({
  selector: 'app-recipe-detail-steps',
  templateUrl: './recipe-detail-steps.component.html',
  styleUrls: ['./recipe-detail-steps.component.css']
})
export class RecipeDetailStepsComponent implements OnInit {

  @Input() recipe: Recipe

  constructor () { }

  ngOnInit (): void {
  }

}

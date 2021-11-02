import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../../../entities/Recipe';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-recipe-detail-header',
  templateUrl: './recipe-detail-header.component.html',
  styleUrls: ['./recipe-detail-header.component.css']
})
export class RecipeDetailHeaderComponent implements OnInit {
  url: string = environment.basicPath;

  @Input() recipe: Recipe

  constructor () {
  }

  ngOnInit (): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  //TODO: pass recipe name or another more readable parameter
  ngOnInit () {
    var id = this.activatedRoute.snapshot.paramMap.get('id')
    this.recipe = history.state
  }

}

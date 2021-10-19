import { Injectable } from '@angular/core';
import { Recipe } from '../entities/Recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor () { }

  getRecipes (): Recipe[] {
    return [{ name: 'Recipe 1', description: 'Description 1' }, { name: 'Recipe 2', description: 'Description 2' }]
  }
}

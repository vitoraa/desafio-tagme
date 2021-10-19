import { Injectable } from '@angular/core';
import { Recipe } from '../entities/Recipe';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:3003/api/v1/recipes'

  constructor (private http: HttpClient) { }

  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl)
  }
}

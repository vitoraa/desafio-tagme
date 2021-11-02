import { Injectable } from '@angular/core';
import { Recipe } from '../entities/Recipe';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor (private http: HttpClient) { }

  getRecipes (): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(environment.apiUrl + '/recipes')
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'receitas', component: RecipesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

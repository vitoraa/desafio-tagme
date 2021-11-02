import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/recipes/header/header.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-item/recipe-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailHeaderComponent } from './components/recipes/recipe-detail/recipe-detail-header/recipe-detail-header.component';
import { RecipeDetailIngredientsComponent } from './components/recipes/recipe-detail/recipe-detail-ingredients/recipe-detail-ingredients.component';
import { RecipeDetailStepsComponent } from './components/recipes/recipe-detail/recipe-detail-steps/recipe-detail-steps.component';
import { RecipeProgressComponent } from './components/recipes/recipe-detail/recipe-detail-steps/recipe-progress/recipe-progress.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    SearchFilterPipe,
    LoginComponent,
    LoginFormComponent,
    RecipesComponent,
    RecipeDetailComponent,
    RecipeDetailHeaderComponent,
    RecipeDetailIngredientsComponent,
    RecipeDetailStepsComponent,
    RecipeProgressComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeItemComponent,
    SearchFilterPipe,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailIngredientsComponent } from './recipe-detail-ingredients.component';

describe('RecipeDetailIngredientsComponent', () => {
  let component: RecipeDetailIngredientsComponent;
  let fixture: ComponentFixture<RecipeDetailIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailIngredientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailStepsComponent } from './recipe-detail-steps.component';

describe('RecipeDetailStepsComponent', () => {
  let component: RecipeDetailStepsComponent;
  let fixture: ComponentFixture<RecipeDetailStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailStepsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

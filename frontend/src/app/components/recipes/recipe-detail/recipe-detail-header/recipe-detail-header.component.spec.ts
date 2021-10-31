import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailHeaderComponent } from './recipe-detail-header.component';

describe('RecipeDetailHeaderComponent', () => {
  let component: RecipeDetailHeaderComponent;
  let fixture: ComponentFixture<RecipeDetailHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeDetailHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

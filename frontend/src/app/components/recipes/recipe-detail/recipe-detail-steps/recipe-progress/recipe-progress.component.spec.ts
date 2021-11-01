import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeProgressComponent } from './recipe-progress.component';

describe('RecipeProgressComponent', () => {
  let component: RecipeProgressComponent;
  let fixture: ComponentFixture<RecipeProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

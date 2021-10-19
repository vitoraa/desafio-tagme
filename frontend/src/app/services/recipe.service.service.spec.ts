import { TestBed } from '@angular/core/testing';

import { Recipe.ServiceService } from './recipe.service.service';

describe('Recipe.ServiceService', () => {
  let service: Recipe.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recipe.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

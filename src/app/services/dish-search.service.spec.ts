import { TestBed } from '@angular/core/testing';

import { DishSearchService } from './dish-search.service';

describe('DishSearchService', () => {
  let service: DishSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

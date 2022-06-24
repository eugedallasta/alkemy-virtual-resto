import { TestBed } from '@angular/core/testing';

import { DishesSelectionService } from './dishes-selection.service';

describe('DishesSelectionService', () => {
  let service: DishesSelectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesSelectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

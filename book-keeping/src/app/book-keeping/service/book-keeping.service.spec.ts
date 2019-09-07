import { TestBed } from '@angular/core/testing';

import { BookKeeppingService } from './book-keeping.service';

describe('BookKeeppingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookKeeppingService = TestBed.get(BookKeeppingService);
    expect(service).toBeTruthy();
  });
});

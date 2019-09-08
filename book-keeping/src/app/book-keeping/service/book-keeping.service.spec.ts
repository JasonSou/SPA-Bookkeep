import { TestBed } from '@angular/core/testing';

import { BookKeepingService } from './book-keeping.service';

describe('BookKeepingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookKeepingService = TestBed.get(BookKeepingService);
    expect(service).toBeTruthy();
  });
});

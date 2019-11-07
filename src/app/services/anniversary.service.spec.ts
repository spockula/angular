import { TestBed } from '@angular/core/testing';

import { AnniversaryService } from './anniversary.service';

describe('AnniversaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnniversaryService = TestBed.get(AnniversaryService);
    expect(service).toBeTruthy();
  });
});

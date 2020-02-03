import { TestBed } from '@angular/core/testing';

import { Hammer.ConfigService } from './hammer.config.service';

describe('Hammer.ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Hammer.ConfigService = TestBed.get(Hammer.ConfigService);
    expect(service).toBeTruthy();
  });
});

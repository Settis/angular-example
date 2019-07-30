import { TestBed } from '@angular/core/testing';

import { GeoNamesService } from './geo-names.service';

describe('GeoNamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoNamesService = TestBed.get(GeoNamesService);
    expect(service).toBeTruthy();
  });
});

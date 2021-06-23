import { TestBed } from '@angular/core/testing';

import { TypeApiService } from './type-api.service';

describe('TypesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeApiService = TestBed.get(TypeApiService);
    expect(service).toBeTruthy();
  });
});

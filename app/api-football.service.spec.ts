import { TestBed } from '@angular/core/testing';

import { APIFOOTBALLService } from './api-football.service';

describe('APIFOOTBALLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: APIFOOTBALLService = TestBed.get(APIFOOTBALLService);
    expect(service).toBeTruthy();
  });
});

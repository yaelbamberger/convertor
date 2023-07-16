import { TestBed } from '@angular/core/testing';

import { ConvertApiService } from './convert-api.service';

describe('ConvertApiService', () => {
  let service: ConvertApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

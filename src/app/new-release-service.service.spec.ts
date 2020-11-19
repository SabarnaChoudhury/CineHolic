import { TestBed } from '@angular/core/testing';

import { NewReleaseServiceService } from './new-release-service.service';

describe('NewReleaseServiceService', () => {
  let service: NewReleaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewReleaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

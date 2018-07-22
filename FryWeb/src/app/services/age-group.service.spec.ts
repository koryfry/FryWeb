import { TestBed, inject } from '@angular/core/testing';

import { AgeGroupService } from './age-group.service';

describe('AgeGroupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgeGroupService]
    });
  });

  it('should be created', inject([AgeGroupService], (service: AgeGroupService) => {
    expect(service).toBeTruthy();
  }));
});

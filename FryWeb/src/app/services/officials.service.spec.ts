import { TestBed, inject } from '@angular/core/testing';

import { OfficialsService } from './officials.service';

describe('OfficialsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OfficialsService]
    });
  });

  it('should be created', inject([OfficialsService], (service: OfficialsService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { TableDisplayService } from './table-display.service';

describe('TableDisplayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableDisplayService]
    });
  });

  it('should be created', inject([TableDisplayService], (service: TableDisplayService) => {
    expect(service).toBeTruthy();
  }));
});

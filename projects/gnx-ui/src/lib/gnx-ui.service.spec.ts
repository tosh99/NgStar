import { TestBed, inject } from '@angular/core/testing';

import { GnxUiService } from './gnx-ui.service';

describe('GnxUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GnxUiService]
    });
  });

  it('should be created', inject([GnxUiService], (service: GnxUiService) => {
    expect(service).toBeTruthy();
  }));
});

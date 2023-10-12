import { TestBed } from '@angular/core/testing';

import { LigneCmdFrsService } from './ligne-cmd-frs.service';

describe('LigneCmdFrsService', () => {
  let service: LigneCmdFrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneCmdFrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

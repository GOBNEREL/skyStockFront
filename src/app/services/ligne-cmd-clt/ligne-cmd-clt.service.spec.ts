import { TestBed } from '@angular/core/testing';

import { LigneCmdCltService } from './ligne-cmd-clt.service';

describe('LigneCmdCltService', () => {
  let service: LigneCmdCltService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneCmdCltService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

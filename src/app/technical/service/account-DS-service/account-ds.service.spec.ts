import { TestBed } from '@angular/core/testing';

import { AccountDSService } from './account-ds.service';

describe('AccountDSService', () => {
  let service: AccountDSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountDSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

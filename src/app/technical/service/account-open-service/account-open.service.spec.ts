import { TestBed } from '@angular/core/testing';

import { AccountOpenService } from './account-open.service';

describe('AccountOpenService', () => {
  let service: AccountOpenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountOpenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

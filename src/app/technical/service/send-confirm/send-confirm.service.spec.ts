import { TestBed } from '@angular/core/testing';

import { SendConfirmService } from './send-confirm.service';

describe('SendConfirmService', () => {
  let service: SendConfirmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendConfirmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

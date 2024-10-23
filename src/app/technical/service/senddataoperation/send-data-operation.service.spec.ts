import { TestBed } from '@angular/core/testing';

import { SendDataOperationService } from './send-data-operation.service';

describe('SendDataOperationService', () => {
  let service: SendDataOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendDataOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

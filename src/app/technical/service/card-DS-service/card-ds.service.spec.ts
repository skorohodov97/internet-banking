import { TestBed } from '@angular/core/testing';

import { CardDSService } from './card-ds.service';

describe('CardDSService', () => {
  let service: CardDSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardDSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

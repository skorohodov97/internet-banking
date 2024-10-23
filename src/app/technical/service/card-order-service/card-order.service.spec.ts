import { TestBed } from '@angular/core/testing';

import { CardOrderService } from './card-order.service';

describe('CardOrderService', () => {
  let service: CardOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

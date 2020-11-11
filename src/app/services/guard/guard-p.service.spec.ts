import { TestBed } from '@angular/core/testing';

import { GuardPService } from './guard-p.service';

describe('GuardPService', () => {
  let service: GuardPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

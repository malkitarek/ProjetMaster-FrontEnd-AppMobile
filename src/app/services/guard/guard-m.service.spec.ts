import { TestBed } from '@angular/core/testing';

import { GuardMService } from './guard-m.service';

describe('GuardMService', () => {
  let service: GuardMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

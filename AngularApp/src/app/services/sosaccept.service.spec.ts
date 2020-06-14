import { TestBed } from '@angular/core/testing';

import { SosacceptService } from './sosaccept.service';

describe('SosacceptService', () => {
  let service: SosacceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SosacceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

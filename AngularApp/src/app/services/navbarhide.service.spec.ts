import { TestBed } from '@angular/core/testing';

import { NavbarhideService } from './navbarhide.service';

describe('NavbarhideService', () => {
  let service: NavbarhideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavbarhideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

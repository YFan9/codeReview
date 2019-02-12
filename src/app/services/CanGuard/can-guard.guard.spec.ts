import { TestBed, async, inject } from '@angular/core/testing';

import { CanGuardGuard } from './can-guard.guard';

describe('CanGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanGuardGuard]
    });
  });

  it('should ...', inject([CanGuardGuard], (guard: CanGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

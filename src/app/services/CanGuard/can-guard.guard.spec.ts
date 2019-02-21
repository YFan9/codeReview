import { TestBed, async, inject } from '@angular/core/testing';

import { CanGuard } from './can-guard.guard';

describe('CanGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanGuard]
    });
  });

  it('should ...', inject([CanGuard], (guard: CanGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { MyselfService } from './myself.service';

describe('MyselfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyselfService = TestBed.get(MyselfService);
    expect(service).toBeTruthy();
  });
});

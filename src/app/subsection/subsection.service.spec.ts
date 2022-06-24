import { TestBed } from '@angular/core/testing';

import { SubsectionService } from './subsection.service';

describe('SubsectionService', () => {
  let service: SubsectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubsectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

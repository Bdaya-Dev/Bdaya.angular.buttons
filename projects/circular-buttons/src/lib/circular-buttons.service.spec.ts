import { TestBed } from '@angular/core/testing';

import { CircularButtonsService } from './circular-buttons.service';

describe('CircularButtonsService', () => {
  let service: CircularButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircularButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

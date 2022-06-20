import { TestBed } from '@angular/core/testing';

import { ViewAirportService } from './view-airport.service';

describe('ViewAirportService', () => {
  let service: ViewAirportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewAirportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

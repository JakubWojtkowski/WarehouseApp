import { TestBed } from '@angular/core/testing';

import { TruckRouteService } from './truck-route.service';

describe('TruckRouteService', () => {
  let service: TruckRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

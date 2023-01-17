import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRouteHeaderComponent } from './truck-route-header.component';

describe('TruckRouteHeaderComponent', () => {
  let component: TruckRouteHeaderComponent;
  let fixture: ComponentFixture<TruckRouteHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckRouteHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckRouteHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

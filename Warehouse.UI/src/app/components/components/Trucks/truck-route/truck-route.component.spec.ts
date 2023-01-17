import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRouteComponent } from './truck-route.component';

describe('TruckRouteComponent', () => {
  let component: TruckRouteComponent;
  let fixture: ComponentFixture<TruckRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRouteBoxComponent } from './truck-route-box.component';

describe('TruckRouteBoxComponent', () => {
  let component: TruckRouteBoxComponent;
  let fixture: ComponentFixture<TruckRouteBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckRouteBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckRouteBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

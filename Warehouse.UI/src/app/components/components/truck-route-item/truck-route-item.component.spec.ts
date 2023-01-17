import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckRouteItemComponent } from './truck-route-item.component';

describe('TruckRouteItemComponent', () => {
  let component: TruckRouteItemComponent;
  let fixture: ComponentFixture<TruckRouteItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckRouteItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckRouteItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

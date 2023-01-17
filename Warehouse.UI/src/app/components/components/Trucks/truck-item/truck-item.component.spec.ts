import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckItemComponent } from './truck-item.component';

describe('TruckItemComponent', () => {
  let component: TruckItemComponent;
  let fixture: ComponentFixture<TruckItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruckItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TruckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

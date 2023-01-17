import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveWarehouseComponent } from './active-warehouse.component';

describe('ActiveWarehouseComponent', () => {
  let component: ActiveWarehouseComponent;
  let fixture: ComponentFixture<ActiveWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

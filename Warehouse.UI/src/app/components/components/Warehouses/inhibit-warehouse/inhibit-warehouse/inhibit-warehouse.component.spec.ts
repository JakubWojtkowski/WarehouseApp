import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InhibitWarehouseComponent } from './inhibit-warehouse.component';

describe('InhibitWarehouseComponent', () => {
  let component: InhibitWarehouseComponent;
  let fixture: ComponentFixture<InhibitWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InhibitWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InhibitWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

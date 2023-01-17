import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { WarehousesListComponent } from './warehouses-list.component';

describe('WarehousesListComponent', () => {
  let component: WarehousesListComponent;
  let fixture: ComponentFixture<WarehousesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehousesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});

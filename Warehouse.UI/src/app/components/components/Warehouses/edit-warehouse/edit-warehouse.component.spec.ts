import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { EditWarehouseComponent } from './edit-warehouse.component';

describe('EditWarehouseComponent', () => {
  let component: EditWarehouseComponent;
  let fixture: ComponentFixture<EditWarehouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWarehouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWarehouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import 'jasmine';
import { EditDeliveryComponent } from './edit-delivery.component';

describe('EditDeliveryComponent', () => {
  let component: EditDeliveryComponent;
  let fixture: ComponentFixture<EditDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component);
  });
});

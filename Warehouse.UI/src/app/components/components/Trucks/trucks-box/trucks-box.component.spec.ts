import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksBoxComponent } from './trucks-box.component';

describe('TrucksBoxComponent', () => {
  let component: TrucksBoxComponent;
  let fixture: ComponentFixture<TrucksBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucksBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

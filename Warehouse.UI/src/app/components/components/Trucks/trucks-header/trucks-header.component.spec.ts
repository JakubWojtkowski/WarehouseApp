import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrucksHeaderComponent } from './trucks-header.component';

describe('HeaderComponent', () => {
  let component: TrucksHeaderComponent;
  let fixture: ComponentFixture<TrucksHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrucksHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrucksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

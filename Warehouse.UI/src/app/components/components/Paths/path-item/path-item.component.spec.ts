import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathItemComponent } from './path-item.component';

describe('PathItemComponent', () => {
  let component: PathItemComponent;
  let fixture: ComponentFixture<PathItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

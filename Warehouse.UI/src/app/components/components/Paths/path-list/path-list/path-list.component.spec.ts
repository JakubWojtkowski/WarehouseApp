import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathListComponent } from './path-list.component';

describe('PathListComponent', () => {
  let component: PathListComponent;
  let fixture: ComponentFixture<PathListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

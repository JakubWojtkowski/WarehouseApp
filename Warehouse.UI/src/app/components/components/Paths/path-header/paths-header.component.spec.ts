import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsHeaderComponent } from './paths-header.component';

describe('PathsHeaderComponent', () => {
  let component: PathsHeaderComponent;
  let fixture: ComponentFixture<PathsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

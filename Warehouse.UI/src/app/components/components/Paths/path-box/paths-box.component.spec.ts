import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathsBoxComponent } from './paths-box.component';

describe('PathsBoxComponent', () => {
  let component: PathsBoxComponent;
  let fixture: ComponentFixture<PathsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathsBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

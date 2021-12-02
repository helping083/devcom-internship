import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicsubjectComponent } from './classicsubject.component';

describe('ClassicsubjectComponent', () => {
  let component: ClassicsubjectComponent;
  let fixture: ComponentFixture<ClassicsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassicsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

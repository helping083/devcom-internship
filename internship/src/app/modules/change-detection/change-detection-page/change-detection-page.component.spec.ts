import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPageComponent } from './change-detection-page.component';

describe('ChangeDetectionPageComponent', () => {
  let component: ChangeDetectionPageComponent;
  let fixture: ComponentFixture<ChangeDetectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

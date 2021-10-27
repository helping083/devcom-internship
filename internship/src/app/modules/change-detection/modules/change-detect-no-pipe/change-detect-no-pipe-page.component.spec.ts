import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectNoPipePageComponent } from './change-detect-no-pipe-page.component';

describe('ChangeDetectNoPipePageComponent', () => {
  let component: ChangeDetectNoPipePageComponent;
  let fixture: ComponentFixture<ChangeDetectNoPipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeDetectNoPipePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectNoPipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContentChildComponent } from './select-content-child.component';

describe('SelectContentChildComponent', () => {
  let component: SelectContentChildComponent;
  let fixture: ComponentFixture<SelectContentChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContentChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContentChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

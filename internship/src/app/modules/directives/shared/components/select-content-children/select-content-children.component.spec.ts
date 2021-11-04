import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectContentChildrenComponent } from './select-content-children.component';

describe('SelectContentChildrenComponent', () => {
  let component: SelectContentChildrenComponent;
  let fixture: ComponentFixture<SelectContentChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectContentChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContentChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

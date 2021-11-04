import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAsyncComponent } from './select-async.component';

describe('SelectAsyncComponent', () => {
  let component: SelectAsyncComponent;
  let fixture: ComponentFixture<SelectAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

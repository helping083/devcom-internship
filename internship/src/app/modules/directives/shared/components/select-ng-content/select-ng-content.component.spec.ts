import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectNgContentComponent } from './select-ng-content.component';

describe('SelectNgContentComponent', () => {
  let component: SelectNgContentComponent;
  let fixture: ComponentFixture<SelectNgContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectNgContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectNgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

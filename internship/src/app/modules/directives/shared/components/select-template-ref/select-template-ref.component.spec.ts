import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTemplateRefComponent } from './select-template-ref.component';

describe('SelectTemplateRefComponent', () => {
  let component: SelectTemplateRefComponent;
  let fixture: ComponentFixture<SelectTemplateRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectTemplateRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateComponentComponent } from './separate-component.component';

describe('SeparateComponentComponent', () => {
  let component: SeparateComponentComponent;
  let fixture: ComponentFixture<SeparateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparateComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

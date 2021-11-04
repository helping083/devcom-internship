import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributiveStructuralComponent } from './attributive-structural.component';

describe('AttributiveStructuralComponent', () => {
  let component: AttributiveStructuralComponent;
  let fixture: ComponentFixture<AttributiveStructuralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributiveStructuralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributiveStructuralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

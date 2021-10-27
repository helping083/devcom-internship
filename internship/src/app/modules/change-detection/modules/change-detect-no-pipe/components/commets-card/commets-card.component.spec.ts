import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommetsCardComponent } from './commets-card.component';

describe('CommetsCardComponent', () => {
  let component: CommetsCardComponent;
  let fixture: ComponentFixture<CommetsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommetsCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommetsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

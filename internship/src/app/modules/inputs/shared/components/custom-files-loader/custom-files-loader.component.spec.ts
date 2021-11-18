import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFilesLoaderComponent } from './custom-files-loader.component';

describe('CustomFilesLoaderComponent', () => {
  let component: CustomFilesLoaderComponent;
  let fixture: ComponentFixture<CustomFilesLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomFilesLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFilesLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

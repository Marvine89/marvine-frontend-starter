import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackButtonHeaderComponent } from './back-button-header.component';

describe('BackButtonHeaderComponent', () => {
  let component: BackButtonHeaderComponent;
  let fixture: ComponentFixture<BackButtonHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackButtonHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackButtonHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

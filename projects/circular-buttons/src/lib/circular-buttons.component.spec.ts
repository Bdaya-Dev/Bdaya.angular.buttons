import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularButtonsComponent } from './circular-buttons.component';

describe('CircularButtonsComponent', () => {
  let component: CircularButtonsComponent;
  let fixture: ComponentFixture<CircularButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

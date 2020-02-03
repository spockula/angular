import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTrackerPage } from './leave-tracker.page';

describe('LeaveTrackerPage', () => {
  let component: LeaveTrackerPage;
  let fixture: ComponentFixture<LeaveTrackerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveTrackerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTrackerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalsPage } from './approvals.page';

describe('ApprovalsPage', () => {
  let component: ApprovalsPage;
  let fixture: ComponentFixture<ApprovalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

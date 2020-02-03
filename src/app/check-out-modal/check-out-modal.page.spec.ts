import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOutModalPage } from './check-out-modal.page';

describe('CheckOutModalPage', () => {
  let component: CheckOutModalPage;
  let fixture: ComponentFixture<CheckOutModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckOutModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOutModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

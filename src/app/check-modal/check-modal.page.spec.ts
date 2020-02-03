import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckModalPage } from './check-modal.page';

describe('CheckModalPage', () => {
  let component: CheckModalPage;
  let fixture: ComponentFixture<CheckModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

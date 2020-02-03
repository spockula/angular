import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessCheckModalPage } from './success-check-modal.page';

describe('SuccessCheckModalPage', () => {
  let component: SuccessCheckModalPage;
  let fixture: ComponentFixture<SuccessCheckModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessCheckModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessCheckModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

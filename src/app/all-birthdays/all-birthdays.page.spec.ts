import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBirthdaysPage } from './all-birthdays.page';

describe('AllBirthdaysPage', () => {
  let component: AllBirthdaysPage;
  let fixture: ComponentFixture<AllBirthdaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBirthdaysPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBirthdaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

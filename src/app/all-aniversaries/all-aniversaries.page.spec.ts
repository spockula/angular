import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAniversariesPage } from './all-aniversaries.page';

describe('AllAniversariesPage', () => {
  let component: AllAniversariesPage;
  let fixture: ComponentFixture<AllAniversariesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAniversariesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAniversariesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

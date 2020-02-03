import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueModalPage } from './colleague-modal.page';

describe('ColleagueModalPage', () => {
  let component: ColleagueModalPage;
  let fixture: ComponentFixture<ColleagueModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleagueModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

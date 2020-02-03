import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueCheckinPage } from './colleague-checkin.page';

describe('ColleagueCheckinPage', () => {
  let component: ColleagueCheckinPage;
  let fixture: ComponentFixture<ColleagueCheckinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleagueCheckinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueCheckinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

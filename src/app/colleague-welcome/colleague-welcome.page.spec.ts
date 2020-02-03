import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleagueWelcomePage } from './colleague-welcome.page';

describe('ColleagueWelcomePage', () => {
  let component: ColleagueWelcomePage;
  let fixture: ComponentFixture<ColleagueWelcomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColleagueWelcomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleagueWelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesPage } from './names.page';

describe('NamesPage', () => {
  let component: NamesPage;
  let fixture: ComponentFixture<NamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

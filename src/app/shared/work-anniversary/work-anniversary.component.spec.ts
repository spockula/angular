import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkAnniversaryPage } from './work-anniversary.page';

describe('WorkAnniversaryPage', () => {
  let component: WorkAnniversaryPage;
  let fixture: ComponentFixture<WorkAnniversaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkAnniversaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkAnniversaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

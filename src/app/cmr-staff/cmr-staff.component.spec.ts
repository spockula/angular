import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrStaffComponent } from './cmr-staff.component';

describe('CmrStaffComponent', () => {
  let component: CmrStaffComponent;
  let fixture: ComponentFixture<CmrStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

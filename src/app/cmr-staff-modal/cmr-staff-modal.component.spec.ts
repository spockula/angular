import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrStaffModalComponent } from './cmr-staff-modal.component';

describe('CmrStaffModalComponent', () => {
  let component: CmrStaffModalComponent;
  let fixture: ComponentFixture<CmrStaffModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrStaffModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrStaffModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

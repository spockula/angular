import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrDepartmentComponent } from './cmr-department.component';

describe('CmrDepartmentComponent', () => {
  let component: CmrDepartmentComponent;
  let fixture: ComponentFixture<CmrDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

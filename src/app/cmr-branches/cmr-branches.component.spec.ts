import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrBranchesComponent } from './cmr-branches.component';

describe('CmrBranchesComponent', () => {
  let component: CmrBranchesComponent;
  let fixture: ComponentFixture<CmrBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

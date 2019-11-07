import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrDashboardComponent } from './cmr-dashboard.component';

describe('CmrDashboardComponent', () => {
  let component: CmrDashboardComponent;
  let fixture: ComponentFixture<CmrDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrSidebarComponent } from './cmr-sidebar.component';

describe('CmrSidebarComponent', () => {
  let component: CmrSidebarComponent;
  let fixture: ComponentFixture<CmrSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

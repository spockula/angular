import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmrLoginComponent } from './cmr-login.component';

describe('CmrLoginComponent', () => {
  let component: CmrLoginComponent;
  let fixture: ComponentFixture<CmrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

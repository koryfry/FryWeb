import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwBannerComponent } from './fw-banner.component';

describe('FwBannerComponent', () => {
  let component: FwBannerComponent;
  let fixture: ComponentFixture<FwBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

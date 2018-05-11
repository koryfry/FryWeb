import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwAppIconComponent } from './fw-app-icon.component';

describe('FwAppIconComponent', () => {
  let component: FwAppIconComponent;
  let fixture: ComponentFixture<FwAppIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwAppIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwAppIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

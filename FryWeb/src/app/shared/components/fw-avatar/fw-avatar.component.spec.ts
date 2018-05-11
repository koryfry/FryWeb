import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwIconComponent } from './fw-icon.component';

describe('FwIconComponent', () => {
  let component: FwIconComponent;
  let fixture: ComponentFixture<FwIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

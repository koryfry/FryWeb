import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FwFooterComponent } from './fw-footer.component';

describe('FwFooterComponent', () => {
  let component: FwFooterComponent;
  let fixture: ComponentFixture<FwFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FwFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FwFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

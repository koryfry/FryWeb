import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficiatingMainComponent } from './officiating-main.component';

describe('OfficiatingMainComponent', () => {
  let component: OfficiatingMainComponent;
  let fixture: ComponentFixture<OfficiatingMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficiatingMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficiatingMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

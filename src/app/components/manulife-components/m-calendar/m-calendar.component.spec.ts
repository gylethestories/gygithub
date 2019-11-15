import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MCalendarComponent } from './m-calendar.component';

describe('MCalendarComponent', () => {
  let component: MCalendarComponent;
  let fixture: ComponentFixture<MCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

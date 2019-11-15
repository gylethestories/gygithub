import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MRadioComponent } from './m-radio.component';

describe('MRadioComponent', () => {
  let component: MRadioComponent;
  let fixture: ComponentFixture<MRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

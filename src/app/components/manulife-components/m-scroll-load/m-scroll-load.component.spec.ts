import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MScrollLoadComponent } from './m-scroll-load.component';

describe('MScrollLoadComponent', () => {
  let component: MScrollLoadComponent;
  let fixture: ComponentFixture<MScrollLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MScrollLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MScrollLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

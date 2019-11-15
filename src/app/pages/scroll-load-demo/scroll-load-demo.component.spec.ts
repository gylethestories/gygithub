import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLoadDemoComponent } from './scroll-load-demo.component';

describe('ScrollLoadDemoComponent', () => {
  let component: ScrollLoadDemoComponent;
  let fixture: ComponentFixture<ScrollLoadDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollLoadDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollLoadDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

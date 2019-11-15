import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MIconTextComponent } from './m-icon-text.component';

describe('MIconTextComponent', () => {
  let component: MIconTextComponent;
  let fixture: ComponentFixture<MIconTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MIconTextComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

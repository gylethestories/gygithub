import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MChips } from './m-chips.component';

describe('MChips', () => {
  let component: MChips;
  let fixture: ComponentFixture<MChips>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MChips]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MChips);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeptapComponent } from './leptap.component';

describe('LeptapComponent', () => {
  let component: LeptapComponent;
  let fixture: ComponentFixture<LeptapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeptapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeptapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

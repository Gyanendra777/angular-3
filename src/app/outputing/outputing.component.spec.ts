import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputingComponent } from './outputing.component';

describe('OutputingComponent', () => {
  let component: OutputingComponent;
  let fixture: ComponentFixture<OutputingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

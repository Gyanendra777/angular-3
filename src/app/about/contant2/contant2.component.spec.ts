import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contant2Component } from './contant2.component';

describe('Contant2Component', () => {
  let component: Contant2Component;
  let fixture: ComponentFixture<Contant2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contant2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contant2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

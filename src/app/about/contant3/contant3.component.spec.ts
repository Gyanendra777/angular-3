import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contant3Component } from './contant3.component';

describe('Contant3Component', () => {
  let component: Contant3Component;
  let fixture: ComponentFixture<Contant3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contant3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contant3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

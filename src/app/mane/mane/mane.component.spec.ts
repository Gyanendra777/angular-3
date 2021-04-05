import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManeComponent } from './mane.component';

describe('ManeComponent', () => {
  let component: ManeComponent;
  let fixture: ComponentFixture<ManeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

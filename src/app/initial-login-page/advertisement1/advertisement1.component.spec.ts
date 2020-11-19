import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Advertisement1Component } from './advertisement1.component';

describe('Advertisement1Component', () => {
  let component: Advertisement1Component;
  let fixture: ComponentFixture<Advertisement1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Advertisement1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Advertisement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

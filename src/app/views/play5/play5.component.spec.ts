import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Play5Component } from './play5.component';

describe('Play5Component', () => {
  let component: Play5Component;
  let fixture: ComponentFixture<Play5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Play5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Play5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

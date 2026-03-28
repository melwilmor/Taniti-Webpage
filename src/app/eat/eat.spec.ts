import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eat } from './eat';

describe('Eat', () => {
  let component: Eat;
  let fixture: ComponentFixture<Eat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eat);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

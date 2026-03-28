import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Enjoy } from './enjoy';

describe('Enjoy', () => {
  let component: Enjoy;
  let fixture: ComponentFixture<Enjoy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Enjoy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Enjoy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

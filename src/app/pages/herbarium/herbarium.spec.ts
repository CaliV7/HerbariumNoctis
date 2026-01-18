import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herbarium } from './herbarium';

describe('Herbarium', () => {
  let component: Herbarium;
  let fixture: ComponentFixture<Herbarium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herbarium]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Herbarium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

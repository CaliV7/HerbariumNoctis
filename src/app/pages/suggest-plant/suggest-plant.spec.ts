import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestPlant } from './suggest-plant';

describe('SuggestPlant', () => {
  let component: SuggestPlant;
  let fixture: ComponentFixture<SuggestPlant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuggestPlant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestPlant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

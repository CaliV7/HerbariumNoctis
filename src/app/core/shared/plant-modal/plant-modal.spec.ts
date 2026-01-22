import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantModal } from './plant-modal';

describe('PlantModal', () => {
  let component: PlantModal;
  let fixture: ComponentFixture<PlantModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlantModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

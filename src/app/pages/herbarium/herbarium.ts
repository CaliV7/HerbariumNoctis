import { Component, signal } from '@angular/core';
import { Plant } from '../../core/types/plant';
import { PLANTS } from '../../core/data/plants';
import { PlantCard } from '../../components/plant-card/plant-card';
import { PlantModal } from '../../core/shared/plant-modal/plant-modal';

@Component({
  selector: 'app-herbarium',
  imports: [ PlantCard, PlantModal ],
  templateUrl: './herbarium.html',
})
export class Herbarium {
  plants: Plant[] = PLANTS;
  selectedPlant = signal<Plant | null>(null);
  isModalOpen = signal(false);

  openModal(plant: Plant) {
    this.selectedPlant.set(plant);
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
    this.selectedPlant.set(null);
  }
}

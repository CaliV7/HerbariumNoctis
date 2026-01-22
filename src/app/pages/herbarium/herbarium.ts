import { Component } from '@angular/core';
import { Plant } from '../../core/types/plant';
import { PLANTS } from '../../core/data/plants';
import { PlantCard } from '../../components/plant-card/plant-card';

@Component({
  selector: 'app-herbarium',
  imports: [ PlantCard],
  templateUrl: './herbarium.html',
})
export class Herbarium {
  plants: Plant[] = PLANTS;
}

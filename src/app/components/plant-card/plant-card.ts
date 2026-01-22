import { Component, Input } from '@angular/core';
import { Plant } from '../../core/types/plant';

@Component({
  selector: 'app-plant-card',
  imports: [],
  templateUrl: './plant-card.html',
})
export class PlantCard {
  @Input({ required: true }) plant!: Plant;
}

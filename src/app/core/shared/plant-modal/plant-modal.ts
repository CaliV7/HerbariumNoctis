import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Plant } from '../../types/plant';

@Component({
  selector: 'app-plant-modal',
  imports: [],
  templateUrl: './plant-modal.html',
})
export class PlantModal {
  @Input() plant?: Plant;
  @Input() open: boolean = false;
  @Output() close = new EventEmitter<void>();

  isClosing = false;

  closeModal() {
    this.isClosing = true;
    setTimeout(() => {
      this.close.emit();
      this.isClosing = false;
    }, 250);
  }
}

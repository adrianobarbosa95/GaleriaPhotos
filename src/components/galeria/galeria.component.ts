import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css'],
})
export class GaleriaComponent {
  @Input() photos: string[] = [];
  position: number = 0;
  @Input() legend: string[] = [];
  first(): void {
    this.position = 0;
  }
  previous( ): void {


    this.position--;
     
  }
  next(): void {
    this.position++;
  }
  last(): void {
    this.position = this.photos.length - 1;
  }

  desativar(){


  }
}

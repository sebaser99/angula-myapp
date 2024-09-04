import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrl: './ejemplo1.component.css'
})
export class Ejemplo1Component implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    window.alert('Imagen cambiada, alerta disparada desde el componente hijo')
  }
  @Input() imagenDelPadre: string = '';
  @Output() emisor = new EventEmitter<string>();
  imagen = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  nombre = '';
  nombres = ['Andres', 'Juan Carlos', 'Lorena', 'Verónica']

  setName(){
    this.nombre = 'Darth Vader';
  }
}

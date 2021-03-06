import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {
  enMayusculas: boolean = true;
  orderBy: string = '';
  heroes: Heroe[]=[
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Dardevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'GreenLantern',
      vuela: true,
      color: Color.verde
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  cambiar(){
    this.enMayusculas = !this.enMayusculas;
  }
  orden(valor: string){
    this.orderBy=valor;
  }
}

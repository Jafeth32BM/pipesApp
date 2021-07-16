import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Jafeth';
  genero: string = 'masculino';
  invMap = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Alejandro', 'Oscar'];
  clieMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperando',
  };
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }
  cambiar() {
    this.nombre = 'Melissa';
    this.genero = 'femenino';
  }
  borrar() {
    this.clientes.pop();
  }
  //KeyValuePipe
  persona = {
    nombre: 'Jafeth',
    edad: 25,
    direcion: 'Chalco-Edo.Mex-Mex',
  };
  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Robin',
      vuela: false,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
    },
  ];
  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}

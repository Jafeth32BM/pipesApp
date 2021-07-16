import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string ='jaFEth bM';
  valor: number = 10000;
  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}

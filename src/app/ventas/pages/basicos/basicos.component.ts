import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{
nombreLower: string ='jafeth';
nombreUpper: string ='JAFETH';
nombreComp: string ='jAfEtH bM';
fecha: Date = new Date(); //HOY

}

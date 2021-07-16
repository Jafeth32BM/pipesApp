import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(private primengConfig: PrimeNGConfig) {
    this.primengConfig.ripple = true;
  }

  ngOnInit(): void {
    this.items = [{
      label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      items:[
        {
        label:'Textos y Fechas',
        icon: 'pi pi-align-left',
        routerLink: '/'
        },
        {
          label:'Números',
          icon: 'pi pi-dollar',
          routerLink: 'numeros'
        },
        {
          label:'No Comunes',
          icon: 'pi pi-globe',
          routerLink: 'no-comunes'
        }
      ]
    },
  {
    label: 'Personalizados',
    icon: 'pi pi-cog',
    routerLink: 'ordenar'
  }];
  }
}

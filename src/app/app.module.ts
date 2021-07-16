import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Cambiar local de la app
import  localEsMx from '@angular/common/locales/es-MX';
import  localFr from '@angular/common/locales/fr';
import {registerLocaleData} from'@angular/common';

registerLocaleData(localEsMx);
registerLocaleData(localFr);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue:'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Decorador
import { NgModule } from '@angular/core';

// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necesario para 2-way-data-binding

// Componentes
import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';


@NgModule({
  declarations: [ // Components
    AppComponent,
    Componente1Component,
    Componente2Component
  ],
  imports: [ // Modulos
    BrowserModule,
    FormsModule
  ],
  providers: [], // Servicios
  bootstrap: [AppComponent]
})


export class AppModule { } // No tiene que haber nada dentro
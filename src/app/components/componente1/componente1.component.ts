import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/model/producto';

// Declaramos las variables
const PRODUCTOS: Producto[] = [
  new Producto(15816, 'Impresora', 50, true),
  new Producto(25814, 'Pantalla', 100, true),
  new Producto(35815, 'Ratón', 10, true),
  new Producto(45814, 'Teclado', 15, true),
  new Producto(53257, 'Torre', 500, true),
  new Producto(63258, 'Scanner', 60, false),
  new Producto(73252, 'Portátil', 1000, true),
  new Producto(83253, 'Funda portátil', 8, false),
  new Producto(97533, 'Cargador portátil', 40, false),
  new Producto(10852, 'Windows 10', 1100, true)
];

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit { // Implementamos el interface OnInit

  // Variables de instancia
  productos = PRODUCTOS;
  productosFiltrados = PRODUCTOS.filter(p => p.disponible); // Filter a partir de ES6

  borrar(){
    let productoEliminado = this.productos.pop();
    console.log("productoEliminado", productoEliminado);
  }
  
  //Podemos eliminar el constructor y si quitamos el implements y el import podemos eliminar todos los métodos
  constructor() {
    // No hay que poner nada en el constructor de un Componente, se pone en el ngOnInit
    console.log("constructor");
  }

  // Este método se ejecuta siempre después del constructor, se le puede llamar postConstructor
  ngOnInit(): void { // El interface (que se implementa) OnInit se ha de declarar por imposición
    console.log("ngOnInit");
    console.log(this.productos);
  }

}

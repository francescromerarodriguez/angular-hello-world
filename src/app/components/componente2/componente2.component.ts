import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
  marca: string = undefined;
  color: string = "blanco";
  year: number = undefined;
  descapotable: boolean = false;
  cambio: string = "manual";
  gradoContaminacion: number = 0;


  

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numeroAleatorio : number = Math.random(); // Devuelve número [0..1)
    
}

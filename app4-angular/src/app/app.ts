import { Component } from '@angular/core';
import { Pagina1Component } from './paginas/pagina1/pagina1';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Pagina1Component], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent { 
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  pokemons: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {

    this.http.get<any>('https://pokeapi.co/api/v2/pokemon')
      .subscribe(data => {

        this.pokemons = data.results.map((pokemon: any, index: number) => {

          return {
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          };

        });

      });

  }

}
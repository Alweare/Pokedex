import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PokemonsComponent} from "./composants/pokemons/pokemons.component";
import {GenerationsComponent} from "./composants/generations/generations.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokemonsComponent, GenerationsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';
}

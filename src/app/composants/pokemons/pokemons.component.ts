import { Component } from '@angular/core';
import {Pokemon} from "../../interfaces/pokemon";

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss'
})
export class PokemonsComponent {

  pokemons: Array<Pokemon> = [
    { id: 1, name: 'Bulbizarre', type: ['Plante', 'Poison'], height: '70', weight: '6.9' },
    { id: 2, name: 'Herbizarre', type: ['Plante', 'Poison'], height: '100', weight: '13.0' },
    { id: 3, name: 'Florizarre', type: ['Plante', 'Poison'], height: '200', weight: '100.0' },
    { id: 4, name: 'Salamèche', type: ['Feu'], height: '60', weight: '8.5' },
    { id: 5, name: 'Reptincel', type: ['Feu'], height: '110', weight: '19.0' },
    { id: 6, name: 'Dracaufeu', type: ['Feu', 'Vol'], height: '170', weight: '90.5' },
    { id: 7, name: 'Carapuce', type: ['Eau'], height: '50', weight: '9.0' },
    { id: 8, name: 'Carabaffe', type: ['Eau'], height: '100', weight: '22.5' },
    { id: 9, name: 'Tortank', type: ['Eau'], height: '160', weight: '85.5' },
    { id: 10, name: 'Chenipan', type: ['Insecte'], height: '30', weight: '2.9' }

  ]

}

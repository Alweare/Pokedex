import {Component} from '@angular/core';
import {PokemonsComponent} from "../pokemons/pokemons.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [
    PokemonsComponent,
    RouterLink
  ],
  templateUrl: './generations.component.html',
  styleUrl: './generations.component.scss'
})
export class GenerationsComponent {
idGen ?:number=undefined;
   generations: Array<{id: number, name: string} > = [
     {id: 1 , name :'Génération I'},
     {id:2 , name:'Génération II'},
     {id:3 , name:'Génération III'},
     {id:4 , name:'Génération IV'},
     {id:5 , name:'Génération V'},
     {id:6 , name:'Génération VI'},
     {id:7 , name:'Génération VII'},

  ]

  listByGeneration(id:number){

   this.idGen = id;
  }





}

import {Component, inject, OnInit} from '@angular/core';
import {ApiService} from "../../services/api.service";
import {Pokemon} from "../../interfaces/pokemon";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-pokecard',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './pokecard.component.html',
  styleUrl: './pokecard.component.scss'
})
export class PokecardComponent implements OnInit {

  private apiService: ApiService = inject(ApiService);
  private route: ActivatedRoute = inject(ActivatedRoute);
  idCurrentPokemon?:number;

  pokemon?:Pokemon;

  // Couleur qui seront utilisée pour le bg

  // Électrique (Electric) : bg-yellow-400
  // Feu (Fire) : bg-red-400
  // Eau (Water) : bg-blue-400
  // Plante (Grass) : bg-green-400
  // Poison (Poison) : bg-purple-400
  // Roche (Rock) : bg-gray-600
  // Acier (Steel) : bg-gray-400
  // Fée (Fairy) : bg-pink-400

// Methode pour choisir la couleur du background de la carte en fonction de son type

  // Retrouver le type du pokemon

  // switch case pour retourner la class qu'il faut


  // Methode pour choisir les autres couleurs en fonction du type du pokemon.



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idCurrentPokemon = params['id'];
    })
     this.apiService.getById(this.idCurrentPokemon).subscribe({
       next: (data: any )=> {
         this.pokemon = data;
       },
       error: error => console.error(error)
     })


  }




}

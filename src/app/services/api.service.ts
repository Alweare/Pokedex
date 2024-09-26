import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../interfaces/pokemon";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpClient: HttpClient = inject(HttpClient);

  fetchAll(idGeneration: number): Observable<Pokemon[]> {
    return this.httpClient.get(`https://pokebuildapi.fr/api/v1/pokemon/generation/${(idGeneration)}`) as Observable<Pokemon[]>;

  }

  getById(idPokemon: number | undefined): Observable<Pokemon> {

    return this.httpClient.get(`https://pokebuildapi.fr/api/v1/pokemon/${idPokemon}`) as Observable<Pokemon>;

  }
}

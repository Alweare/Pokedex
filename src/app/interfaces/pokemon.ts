import {Types} from "./types";

import {Stats} from "./stats";

export interface Pokemon {

  id: number
  pokedexId: number
  name: string
  image: string
  sprite: string
  slug: string
  stats: Stats
  apiTypes: Types[]
  apiGeneration: number
  apiResistances: ApiResistance[]
  resistanceModifyingAbilitiesForApi: ResistanceModifyingAbilitiesForApi
  apiEvolutions: ApiEvolution[]
  apiPreEvolution: string
  apiResistancesWithAbilities: ApiResistancesWithAbility[]
}



export interface ApiResistance {
  name: string
  damage_multiplier: number
  damage_relation: string
}

export interface ResistanceModifyingAbilitiesForApi {
  name: string
  slug: string
}

export interface ApiEvolution {
  name: string
  pokedexId: number
}

export interface ApiResistancesWithAbility {
  name: string
  damage_multiplier: number
  damage_relation: string
}




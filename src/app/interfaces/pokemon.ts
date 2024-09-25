import {Types} from "./types";
import {Stats} from "./stats";

export interface Pokemon {
  id:number,
  name: string,
  image:string,
  types:Types[],
  stats:Stats,
  apiGeneration:number

}

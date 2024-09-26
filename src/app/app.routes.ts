import { Routes } from '@angular/router';
import {PokecardComponent} from "./composants/pokecard/pokecard.component";
import {GenerationsComponent} from "./composants/generations/generations.component";
import {PageErreurComponent} from "./composants/page-erreur/page-erreur.component";
import {HomeComponent} from "./composants/home/home.component";

export const routes: Routes = [
  {path:'details/:id', component:PokecardComponent },
  {path: 'home', component:HomeComponent},
  {path: 'generations', component:GenerationsComponent},
  {path: '', component:GenerationsComponent},
  {path: 'error', component:PageErreurComponent},
  {path: '**', redirectTo:'error', pathMatch: 'full'},

];

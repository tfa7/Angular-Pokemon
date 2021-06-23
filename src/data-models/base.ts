import { Pokemon } from "./pokemon";

export interface PokeAPIBase {
  count: number;
  next: string;
}

export class PokeAPI implements PokeAPIBase {
  count: number;
  next: string;
  results: Pokemon[];
}

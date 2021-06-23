import { PokeAPIBase } from "./base";
import { Pokemon } from "./pokemon";

export class PokeTypesApi implements PokeAPIBase {
  count: number;
  next: string;
  results: PokeTypes[];
}

export class PokeTypes {
  name: string;
  url: string;
}

// for the modal dto
export class PokemonDetailModal {
  pokemon: Pokemon;
  types: Array<PokeTypes>;

  constructor(pokemon: Pokemon, types: Array<PokeTypes>) {
    this.pokemon = pokemon;
    this.types = types;
  }
}

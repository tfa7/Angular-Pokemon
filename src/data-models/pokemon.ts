export class Pokemon {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
  description?: string;
}

export class PokemonDetails {
  name: string;
  id: number;
  sprites: Sprites;
  abilities?: Array<any>;
  types?: Array<any>;
}

export class Sprites {
  front_default: string;
}

export class PokemonFilter {
  searchFilterValue: string;
  typeFilterValue: string;
}



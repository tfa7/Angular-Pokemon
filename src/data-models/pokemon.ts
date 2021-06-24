export class Pokemon {
  name: string;
  url: string;
  id?: string;
  details?: PokemonDetails;
  description?: string;
  favourite: boolean;
}

export class PokemonDetails {
  name: string;
  id: number;
  height: number;
  weight: number;
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



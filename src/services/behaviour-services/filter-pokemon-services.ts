import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonFilter } from 'src/data-models/pokemon';

@Injectable()
export class PokemonFilterService {
  private pokemonfilterStatus = new PokemonFilter();
  private pokemonFilterSource = new BehaviorSubject<PokemonFilter>(this.pokemonfilterStatus);

  change(data: PokemonFilter) {
    this.pokemonFilterSource.next(data);
  }

  public filterDataHasChanged(): Observable<PokemonFilter> {
    return this.pokemonFilterSource.asObservable();
  }
}

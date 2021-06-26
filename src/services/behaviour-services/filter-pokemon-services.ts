import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { PokemonFilter } from 'src/data-models/pokemon';

@Injectable()
export class PokemonFilterService {
  private pokemonfilterStatus = new PokemonFilter('','');
  private pokemonFilterSource = new BehaviorSubject<PokemonFilter>(this.pokemonfilterStatus);

  // this updates the data from the component
  change(data: PokemonFilter) : void {
    this.pokemonFilterSource.next(data);
  }

  // this lets the subscribing component know the data has changed
  public filterDataHasChanged(): Observable<PokemonFilter> {
    return this.pokemonFilterSource.asObservable();
  }
}

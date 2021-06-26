import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeTypes } from 'src/data-models/poke-types';
import { PokemonFilter } from 'src/data-models/pokemon';
import { PokemonFilterService } from 'src/services/behaviour-services/filter-pokemon-services';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit {
  typeList: Array<PokeTypes>;
  pokemonFilter: PokemonFilter;

  constructor(private route: ActivatedRoute, private pokemonFilterService: PokemonFilterService) { }

  ngOnInit(): void {
    // one api call - get the list once and pass it down
    // fyi the api call was cached by the resolver
    this.typeList = this.route.snapshot.data['typeList'].results as Array<PokeTypes>;
    this.typeList = this.typeList.sort((a, b) => (a.name > b.name) ? 1 : -1);
    // use this service to check if the filter values changes from detail component (reset)
    this.pokemonFilterService.filterDataHasChanged().subscribe((pokemonFilter: PokemonFilter) => {
      if (pokemonFilter) {
        this.pokemonFilter = pokemonFilter;
      }
    });
  }

  filterChanged(): void {
    this.pokemonFilterService.change(this.pokemonFilter)
  }
}

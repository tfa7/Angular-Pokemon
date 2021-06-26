import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TYPE_COLOURS } from 'src/data-models/enums';
import { PokemonDetails, Pokemon, PokemonFilter } from 'src/data-models/pokemon';
import { PokemonDetailModal, PokeTypes } from 'src/data-models/poke-types';
import { PokemonService } from 'src/services/api/pokemon/pokemon.service';
import { PokemonFilterService } from 'src/services/behaviour-services/filter-pokemon-services';
import { HelperService } from 'src/utils/helper';
import { scaleInAnimation } from 'src/utils/scale-in.animation';
import { PokemonDetailModalComponent } from '../pokemon-detail-modal/pokemon-detail-modal.component';
import { PokeAPI } from 'src/data-models/base';

@Component({
  selector: 'app-pokemon-homepage',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
  animations: [scaleInAnimation]
})
export class PokemonDetailComponent implements OnInit {
  @Input() typeList: Array<PokeTypes>;
  pokemonFilter: PokemonFilter;
  dataLoaded: boolean;
  pokemons: PokeAPI;
  pagingOffset: number

  constructor(public pokemonFilterService: PokemonFilterService, public dialog: MatDialog, private pokemonService: PokemonService, private helper: HelperService) { }

  ngOnInit(): void {
    this.pagingOffset = 0;
    this.getPokemons(this.pagingOffset);

    // use this service to check if the filter values change (reset)
    this.pokemonFilterService.filterDataHasChanged().subscribe((pokemonFilter : PokemonFilter) => {
      if (pokemonFilter) {
        this.pokemonFilter = pokemonFilter;
      }
    });
  }

  getPokemons(pagingOffset: number): void {
    // reset the filters on change page
    this.pokemonFilterService.change(null);
    this.dataLoaded = false;
    this.pokemonService.getPokemonApi(pagingOffset).subscribe((data: PokeAPI) => {
      this.pokemons = data;
      this.pokemons.results = this.pokemons.results.sort((a, b) => (a.name > b.name) ? 1 : -1);
      if (this.pokemons.results && this.pokemons.results.length) {
        // get pokemon details for every pokemon
        this.pokemons.results.forEach(pokemon => {
          this.getPokemonDetails(pokemon);
        });
      }
    });
  }

  getPokemonDetails(pokemon: Pokemon): void {
    this.pokemonService.getPokemonDetailsApi(pokemon.name).subscribe(async (details: PokemonDetails) => {
      //small delay showing the loading ball simulating an external api call
      await this.helper.delay(1500);
      pokemon.details = details;
      this.dataLoaded = true;
    });
  }

  viewPokemonItem(pokemon: Pokemon): void {
    // usually try no to use modals but here is an example
    // of passing data to a modal, allowing the user to modify
    // and then passing the data back where we can make an api put call
    let data = new PokemonDetailModal(pokemon, this.typeList);
    const dialogRef = this.dialog.open(PokemonDetailModalComponent, {
      data: data,
      minHeight: 540,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe((updatedPokemon: Pokemon) => {
      // currently auto saves but we can do what we want here - api update
    });
  }

  back(): void {
    //should be no need to check this offset value if button is disabled
    if (this.pagingOffset <= 0) {
      return;
    }

    this.pagingOffset -= 20;
    this.getPokemons(this.pagingOffset);
  }

  next(): void {
    this.pagingOffset += 20;
    this.getPokemons(this.pagingOffset);
  }

  // returns colour based on type mapped in TYPE_COLOURS interface
  _getTypeColour(type: string): string {
    if (type) {
      return '#' + TYPE_COLOURS[type];
    }
  }
}


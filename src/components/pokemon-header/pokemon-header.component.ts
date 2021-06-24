import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeTypes } from 'src/data-models/poke-types';
import { PokemonFilterService } from 'src/services/behaviour-services/filter-pokemon-services';

@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.scss']
})
export class PokemonHeaderComponent implements OnInit, AfterContentChecked {
  searchFilterValue: string;
  typeFilterValue: string;
  typeList: Array<PokeTypes>;

  constructor(private cdref: ChangeDetectorRef, private route: ActivatedRoute, private pokemonFilterService: PokemonFilterService) { }

  ngAfterContentChecked(): void {
    // To make sure when Angular runs the validation stage it detects that there is no update pending
    this.cdref.detectChanges();
  }

  ngOnInit(): void {
    // one api call - get the list once and pass it down
    // fyi the api call was cached by the resolver
    this.typeList = this.route.snapshot.data['typeList'].results as Array<PokeTypes>;
    this.typeList = this.typeList.sort((a, b) => (a.name > b.name) ? 1 : -1);

    // use this service to check if the filter values change (reset)
    this.pokemonFilterService.filterDataHasChanged().subscribe((getValue) => {
      if (getValue) {
        this.searchFilterValue = getValue.searchFilterValue;
        this.typeFilterValue = getValue.typeFilterValue;
      }
      else {
        this.searchFilterValue = null;
        this.typeFilterValue = null;
      }
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from 'src/data-models/pokemon';
import { ErrorHandlerService } from '../error-handler';
import { PokeAPI } from 'src/data-models/base';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemonApiUrl: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.pokemonApiUrl = environment.pokemonApiUrl;
  }
  
  //We could make a generic type <T> GET method that passes the url in full
  
  //Returns list of pokemons
  getPokemonApi(offset: number = 0): Observable<PokeAPI> {
    let pageSize = environment.pageSize;
    return this.http
      .get<PokeAPI>(`${this.pokemonApiUrl}pokemon?limit=` + pageSize + '&offset=' + offset)
      .pipe(catchError(this.errorHandlerService.handleError));
  }

  //Uses pokemon name to retrieve individual pokemon details
  getPokemonDetailsApi(name): Observable<PokemonDetails> {
    return this.http
      .get<PokemonDetails>(`${this.pokemonApiUrl}pokemon/${name}`)
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}

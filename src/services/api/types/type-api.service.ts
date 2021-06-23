import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from '../error-handler';
import { PokeAPI } from 'src/data-models/base';

@Injectable({
  providedIn: 'root'
})
export class TypeApiService {
  pokemonApiUrl: string;

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) {
    this.pokemonApiUrl = environment.pokemonApiUrl;
  }

  getPokemonTypesApi(): Observable<PokeAPI> {
    return this.http
      .get<PokeAPI>(`${this.pokemonApiUrl}type`)
      .pipe(catchError(this.errorHandlerService.handleError));
  }
}


import { isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { makeStateKey, TransferState } from "@angular/platform-browser";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";
import { first, tap } from "rxjs/operators";
import { TypeApiService } from "./type-api.service";

@Injectable()
export class TypeResolverService implements Resolve<any> {
  constructor(private typeApiService: TypeApiService, private transferState: TransferState, @Inject(PLATFORM_ID) private platformId) { }

  resolve(): Observable<any> {

    const Key = makeStateKey<any>('typeList');

    if (this.transferState.hasKey(Key)) {

      const data = this.transferState.get<any>(Key, null);

      return of(data);
    }
    else {
      return this.typeApiService.getPokemonTypesApi()
        .pipe(
          first(),
          tap(data => {
            if (isPlatformServer(this.platformId)) {
              this.transferState.set(Key, data);
            }
          })
        );
    }
  }
}

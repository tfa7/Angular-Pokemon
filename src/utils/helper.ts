import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  constructor() { }
  //delay
  public delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

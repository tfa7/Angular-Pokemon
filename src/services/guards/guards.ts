import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardHomePage implements CanActivate {

  constructor(private title: Title, private meta: Meta) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    this.title.setTitle("Pokemon Angular App");
    this.meta.updateTag({ content: "Sample Angular App." }, 'name="description"');
    return true;
  }
}

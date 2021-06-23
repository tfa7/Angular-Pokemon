import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { TypeResolverService } from 'src/services/api/types/type-resolver.service';
import { AuthGuardHomePage } from 'src/services/guards/guards';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        //demo using guard which is mostly used to restrict access but using it here to set page title for demo purposes
        canActivate: [AuthGuardHomePage],
        component: PokemonHeaderComponent,
        resolve: {
          //could resolve all api data calls here just want to demo
          typeList: TypeResolverService
        }
      },
      { path: '**', redirectTo: '/' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

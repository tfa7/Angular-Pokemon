import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonDetailModalComponent } from 'src/components/pokemon-detail-modal/pokemon-detail-modal.component';
import { PokemonHeaderComponent } from 'src/components/pokemon-header/pokemon-header.component';
import { PokemonDetailComponent } from 'src/components/pokemon-detail/pokemon-detail.component';
import { TypeFilterPipe } from 'src/pipes/typeFilter.pipe';
import { MaterialModule } from './../modules/material-module';
import { SearchPipe } from './../pipes/search.pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TypeResolverService } from 'src/services/api/types/type-resolver.service';
import { PokemonFilterService } from 'src/services/behaviour-services/filter-pokemon-services';

@NgModule({
  declarations: [
    AppComponent,
    PokemonDetailComponent,
    PokemonHeaderComponent,
    PokemonDetailModalComponent,
    SearchPipe,
    TypeFilterPipe
  ],
  imports: [
    BrowserTransferStateModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    PokemonDetailModalComponent
  ],
  providers: [
    TypeResolverService,
    PokemonFilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

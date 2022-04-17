import {LOCALE_ID, NgModule} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {MoviesPipe} from './pipes/movies.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { NewMovieComponent } from './components/new-movie/new-movie.component';

registerLocaleData(localeUk);

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesPipe,
    SearchPipe,
    SortPipe,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'uk-UK'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

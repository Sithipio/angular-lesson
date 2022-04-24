import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeUk from '@angular/common/locales/uk';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MoviesComponent} from './pages/movies/movies.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MoviesPipe} from './pipes/movies.pipe';
import {SearchPipe} from './pipes/search.pipe';
import {SortPipe} from './pipes/sort.pipe';
import {NewMovieComponent} from './pages/new-movie/new-movie.component';
import {Routes, RouterModule} from '@angular/router';
import {FavoritesComponent} from './pages/favorites/favorites.component';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {environment} from "../environments/environment";

registerLocaleData(localeUk);

const appRoutes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: 'add-new-movie', component: NewMovieComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesPipe,
    SearchPipe,
    SortPipe,
    NewMovieComponent,
    FavoritesComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbCollapseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'uk-UK'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

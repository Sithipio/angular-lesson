import {Injectable} from '@angular/core';
import {IMovie} from "../interfaces/movie.interface";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  /*  private movies: IMovie[] = [];
    //   [
    //   {
    //     "title": "Ratatouille",
    //     "year": "2007",
    //     "actors": ["Patton Oswalt", "Ian Holm", "Lou Romano", "Brian Dennehy"],
    //     "cashFees": 623726085,
    //     "createdData": "Sun Apr 16 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "City of God",
    //     "year": "2002",
    //     "actors": ["Alexandre Rodrigues", "Leandro Firmino", "Phellipe Haagensen", "Douglas Silva"],
    //     "cashFees": 30680793,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Stardust",
    //     "year": "2007",
    //     "actors": ["Ian McKellen", "Bimbo Hart", "Alastair MacIntosh", "David Kelly"],
    //     "cashFees": 137515140,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "Apocalypto",
    //     "year": "2006",
    //     "actors": ["Rudy Youngblood", "Dalia Hernández", "Jonathan Brewer", "Morris Birdyellowhead"],
    //     "cashFees": 120673227,
    //     "createdData": "Sun Apr 13 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Inception",
    //     "year": "2010",
    //     "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"],
    //     "cashFees": 836848102,
    //     "createdData": "Sun Apr 11 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Reservoir Dogs",
    //     "year": "1992",
    //     "actors": ["Harvey Keitel", "Tim Roth", "Michael Madsen", "Chris Penn"],
    //     "cashFees": 2913644,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Requiem for a Dream",
    //     "year": "2000",
    //     "actors": ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly", "Marlon Wayans"],
    //     "cashFees": 7390108,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "The Truman Show",
    //     "year": "1998",
    //     "actors": ["Jim Carrey", "Laura Linney", "Noah Emmerich", "Natascha McElhone"],
    //     "cashFees": 264118201,
    //     "createdData": "Sun Apr 15 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Madagascar 3: Europe's Most Wanted",
    //     "year": "2012",
    //     "actors": ["Ben Stiller", "Chris Rock", "David Schwimmer", "Jada Pinkett Smith"],
    //     "cashFees": 746921274,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "God Bless America",
    //     "year": "2011",
    //     "actors": ["Joel Murray", "Tara Lynne Barr", "Melinda Page Hamilton", "Mackenzie Brooke Smith"],
    //     "cashFees": 393880,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "The Social Network",
    //     "year": "2010",
    //     "actors": ["Jesse Eisenberg", "Rooney Mara", "Bryan Barter", "Dustin Fitzsimons"],
    //     "cashFees": 224920375,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Pirates of the Caribbean: At World's End",
    //     "year": "2007",
    //     "actors": ["Johnny Depp", "Geoffrey Rush", "Orlando Bloom", "Keira Knightley"],
    //     "cashFees": 654264015,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": true,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "WALL·E",
    //     "year": "2008",
    //     "actors": ["Ben Burtt", "Elissa Knight", "Jeff Garlin", "Fred Willard"],
    //     "cashFees": 521311890,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "The Wolf of Wall Street",
    //     "year": "2013",
    //     "actors": ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey"],
    //     "cashFees": 392000694,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "Hellboy II: The Golden Army",
    //     "year": "2008",
    //     "actors": ["Ron Perlman", "Selma Blair", "Doug Jones", "John Alexander"],
    //     "cashFees": 168319243,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Alice in Wonderland",
    //     "year": "2010",
    //     "actors": ["Johnny Depp", "Mia Wasikowska", "Helena Bonham Carter", "Anne Hathaway"],
    //     "cashFees": 1025468216,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "The Impossible",
    //     "year": "2012",
    //     "actors": ["Naomi Watts", "Ewan McGregor", "Tom Holland", "Samuel Joslin"],
    //     "cashFees": 198087212,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "Shrek",
    //     "year": "2001",
    //     "actors": ["Mike Myers", "Eddie Murphy", "Cameron Diaz", "John Lithgow"],
    //     "cashFees": 488351320,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": true,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "Mr. & Mrs. Smith",
    //     "year": "2005",
    //     "actors": ["Brad Pitt", "Angelina Jolie", "Vince Vaughn", "Adam Brody"],
    //     "cashFees": 487287646,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "Original Sin",
    //     "year": "2001",
    //     "actors": ["Antonio Banderas", "Angelina Jolie", "Thomas Jane", "Jack Thompson"],
    //     "cashFees": 35402320,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg"
    //   },
    //
    //   {
    //     "title": "The Lord of the Rings: The Two Towers",
    //     "year": "2002",
    //     "actors": ["Bruce Allpress", "Sean Astin", "John Bach", "Sala Baker"],
    //     "cashFees": 947896241,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": true,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "Ex Machina",
    //     "year": "2015",
    //     "actors": ["Domhnall Gleeson", "Corey Johnson", "Oscar Isaac", "Alicia Vikander"],
    //     "cashFees": 36869414,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg"
    //   },
    //   {
    //     "title": "The Theory of Everything",
    //     "year": "2014",
    //     "actors": ["Eddie Redmayne", "Felicity Jones", "Tom Prior", "Sophie Perry"],
    //     "cashFees": 123726688,
    //     "createdData": "Sun Apr 17 2022 13:54:49 GMT+0300",
    //     "isFavorite": false,
    //     "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"
    //   }
    //
    // ];
    */

  private dbPath = '/movies';
  moviesRef: AngularFirestoreCollection<IMovie[]>;

  constructor(private db: AngularFirestore) {
    this.moviesRef = db.collection(this.dbPath);
  }

  getMovies(): Observable<any[]> {
    return this.moviesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        )
      )
    );
  }

  getFavoritesMovies(): Observable<any[]> {
    return this.moviesRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({id: c.payload.doc.id, ...c.payload.doc.data()})
        ).filter((item: any) => {
          return item.isFavorite;
        })
      )
    );
  }

  deleteMovie(id: string): Promise<void> {
    return this.moviesRef.doc(id).delete();
  }

  addMovie(movie: any): Promise<any> {
    return this.moviesRef.add({...movie});
  }

  toggleFavorite( movie:any): Promise<any> {
    return this.moviesRef.doc(movie.id).update(movie);
  }
}

import {Injectable} from '@angular/core';
import {IMovie} from "../interfaces/movie.interface";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: IMovie[] = [
    {
      "id": 1,
      "title": "Ratatouille",
      "year": "2007",
      "runtime": "111",
      "genres": [
        "Animation",
        "Comedy",
        "Family"
      ],
      "director": "Brad Bird, Jan Pinkava",
      "actors": "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
      "cashFees": 623726085,
      "plot": "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg"
    },
    {
      "id": 2,
      "title": "City of God",
      "year": "2002",
      "runtime": "130",
      "genres": [
        "Crime",
        "Drama"
      ],
      "director": "Fernando Meirelles, Kátia Lund",
      "actors": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
      "cashFees": 30680793,
      "plot": "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg"
    },

    {
      "id": 3,
      "title": "Stardust",
      "year": "2007",
      "runtime": "127",
      "genres": [
        "Adventure",
        "Family",
        "Fantasy"
      ],
      "director": "Matthew Vaughn",
      "actors": "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
      "cashFees": 137515140,
      "plot": "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg"
    },
    {
      "id": 4,
      "title": "Apocalypto",
      "year": "2006",
      "runtime": "139",
      "genres": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "director": "Mel Gibson",
      "actors": "Rudy Youngblood, Dalia Hernández, Jonathan Brewer, Morris Birdyellowhead",
      "cashFees": 120673227,
      "plot": "As the Mayan kingdom faces its decline, the rulers insist the key to prosperity is to build more temples and offer human sacrifices. Jaguar Paw, a young man captured for sacrifice, flees to avoid his fate.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNTM1NjYyNTY5OV5BMl5BanBnXkFtZTcwMjgwNTMzMQ@@._V1_SX300.jpg"
    },

    {
      "id": 5,
      "title": "Inception",
      "year": "2010",
      "runtime": "148",
      "genres": [
        "Action",
        "Adventure",
        "Sci-Fi"
      ],
      "director": "Christopher Nolan",
      "actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
      "cashFees": 836848102,
      "plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },

    {
      "id": 6,
      "title": "Reservoir Dogs",
      "year": "1992",
      "runtime": "99",
      "genres": [
        "Crime",
        "Drama",
        "Thriller"
      ],
      "director": "Quentin Tarantino",
      "actors": "Harvey Keitel, Tim Roth, Michael Madsen, Chris Penn",
      "cashFees": 2913644,
      "plot": "After a simple jewelry heist goes terribly wrong, the surviving criminals begin to suspect that one of them is a police informant.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNjE5ZDJiZTQtOGE2YS00ZTc5LTk0OGUtOTg2NjdjZmVlYzE2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg"
    },

    {
      "id": 7,
      "title": "Requiem for a Dream",
      "year": "2000",
      "runtime": "102",
      "genres": [
        "Drama"
      ],
      "director": "Darren Aronofsky",
      "actors": "Ellen Burstyn, Jared Leto, Jennifer Connelly, Marlon Wayans",
      "cashFees": 7390108,
      "plot": "The drug-induced utopias of four Coney Island people are shattered when their addictions run deep.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkzODMzODYwOF5BMl5BanBnXkFtZTcwODM2NjA2NQ@@._V1_SX300.jpg"
    },
    {
      "id": 8,
      "title": "The Truman Show",
      "year": "1998",
      "runtime": "103",
      "genres": [
        "Comedy",
        "Drama",
        "Sci-Fi"
      ],
      "director": "Peter Weir",
      "actors": "Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone",
      "cashFees": 264118201,
      "plot": "An insurance salesman/adjuster discovers his entire life is actually a television show.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMDIzODcyY2EtMmY2MC00ZWVlLTgwMzAtMjQwOWUyNmJjNTYyXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"
    },

    {
      "id": 9,
      "title": "Madagascar 3: Europe's Most Wanted",
      "year": "2012",
      "runtime": "93",
      "genres": [
        "Animation",
        "Adventure",
        "Comedy"
      ],
      "director": "Eric Darnell, Tom McGrath, Conrad Vernon",
      "actors": "Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith",
      "cashFees": 746921274,
      "plot": "Alex, Marty, Gloria and Melman are still fighting to get home to their beloved Big Apple. Their journey takes them through Europe where they find the perfect cover: a traveling circus, which they reinvent - Madagascar style.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2MTIzNzk2MF5BMl5BanBnXkFtZTcwMDcwMzQxNw@@._V1_SX300.jpg"
    },
    {
      "id": 10,
      "title": "God Bless America",
      "year": "2011",
      "runtime": "105",
      "genres": [
        "Comedy",
        "Crime"
      ],
      "director": "Bobcat Goldthwait",
      "actors": "Joel Murray, Tara Lynne Barr, Melinda Page Hamilton, Mackenzie Brooke Smith",
      "cashFees": 393880,
      "plot": "On a mission to rid society of its most repellent citizens, terminally ill Frank makes an unlikely accomplice in 16-year-old Roxy.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQwMTc1MzA4NF5BMl5BanBnXkFtZTcwNzQwMTgzNw@@._V1_SX300.jpg"
    },
    {
      "id": 11,
      "title": "The Social Network",
      "year": "2010",
      "runtime": "120",
      "genres": [
        "Biography",
        "Drama"
      ],
      "director": "David Fincher",
      "actors": "Jesse Eisenberg, Rooney Mara, Bryan Barter, Dustin Fitzsimons",
      "cashFees": 224920375,
      "plot": "Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, but is later sued by two brothers who claimed he stole their idea, and the co-founder who was later squeezed out of the business.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTM2ODk0NDAwMF5BMl5BanBnXkFtZTcwNTM1MDc2Mw@@._V1_SX300.jpg"
    },

    {
      "id": 12,
      "title": "Pirates of the Caribbean: At World's End",
      "year": "2007",
      "runtime": "169",
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "director": "Gore Verbinski",
      "actors": "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
      "cashFees": 654264015,
      "plot": "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg"
    },

    {
      "id": 13,
      "title": "WALL·E",
      "year": "2008",
      "runtime": "98",
      "genres": [
        "Animation",
        "Adventure",
        "Family"
      ],
      "director": "Andrew Stanton",
      "actors": "Ben Burtt, Elissa Knight, Jeff Garlin, Fred Willard",
      "cashFees": 521311890,
      "plot": "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczOTA3MzY2N15BMl5BanBnXkFtZTcwOTYwNjE2MQ@@._V1_SX300.jpg"
    },
    {
      "id": 14,
      "title": "The Wolf of Wall Street",
      "year": "2013",
      "runtime": "180",
      "genres": [
        "Biography",
        "Comedy",
        "Crime"
      ],
      "director": "Martin Scorsese",
      "actors": "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
      "cashFees": 392000694,
      "plot": "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg"
    },
    {
      "id": 15,
      "title": "Hellboy II: The Golden Army",
      "year": "2008",
      "runtime": "120",
      "genres": [
        "Action",
        "Adventure",
        "Fantasy"
      ],
      "director": "Guillermo del Toro",
      "actors": "Ron Perlman, Selma Blair, Doug Jones, John Alexander",
      "cashFees": 168319243,
      "plot": "The mythical world starts a rebellion against humanity in order to rule the Earth, so Hellboy and his team must save the world from the rebellious creatures.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NzgyMjc2Nl5BMl5BanBnXkFtZTcwOTU3MDI3MQ@@._V1_SX300.jpg"
    },

    {
      "id": 16,
      "title": "Alice in Wonderland",
      "year": "2010",
      "runtime": "108",
      "genres": [
        "Adventure",
        "Family",
        "Fantasy"
      ],
      "director": "Tim Burton",
      "actors": "Johnny Depp, Mia Wasikowska, Helena Bonham Carter, Anne Hathaway",
      "cashFees": 1025468216,
      "plot": "Nineteen-year-old Alice returns to the magical world from her childhood adventure, where she reunites with her old friends and learns of her true destiny: to end the Red Queen's reign of terror.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMwNjAxMTc0Nl5BMl5BanBnXkFtZTcwODc3ODk5Mg@@._V1_SX300.jpg"
    },

    {
      "id": 17,
      "title": "The Impossible",
      "year": "2012",
      "runtime": "114",
      "genres": [
        "Drama",
        "Thriller"
      ],
      "director": "J.A. Bayona",
      "actors": "Naomi Watts, Ewan McGregor, Tom Holland, Samuel Joslin",
      "cashFees": 198087212,
      "plot": "The story of a tourist family in Thailand caught in the destruction and chaotic aftermath of the 2004 Indian Ocean tsunami.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA5NTA3NzQ5Nl5BMl5BanBnXkFtZTcwOTYxNjY0OA@@._V1_SX300.jpg"
    },

    {
      "id": 18,
      "title": "Shrek",
      "year": "2001",
      "runtime": "90",
      "genres": [
        "Animation",
        "Adventure",
        "Comedy"
      ],
      "director": "Andrew Adamson, Vicky Jenson",
      "actors": "Mike Myers, Eddie Murphy, Cameron Diaz, John Lithgow",
      "cashFees": 488351320,
      "plot": "After his swamp is filled with magical creatures, an ogre agrees to rescue a princess for a villainous lord in order to get his land back.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk2NTE1NTE0M15BMl5BanBnXkFtZTgwNjY4NTYxMTE@._V1_SX300.jpg"
    },
    {
      "id": 19,
      "title": "Mr. & Mrs. Smith",
      "year": "2005",
      "runtime": "120",
      "genres": [
        "Action",
        "Comedy",
        "Crime"
      ],
      "director": "Doug Liman",
      "actors": "Brad Pitt, Angelina Jolie, Vince Vaughn, Adam Brody",
      "cashFees": 487287646,
      "plot": "A bored married couple is surprised to learn that they are both assassins hired by competing agencies to kill each other.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxMzcxNzQzOF5BMl5BanBnXkFtZTcwMzQxNjUyMw@@._V1_SX300.jpg"
    },
    {
      "id": 20,
      "title": "Original Sin",
      "year": "2001",
      "runtime": "116",
      "genres": [
        "Drama",
        "Mystery",
        "Romance"
      ],
      "director": "Michael Cristofer",
      "actors": "Antonio Banderas, Angelina Jolie, Thomas Jane, Jack Thompson",
      "cashFees": 35402320,
      "plot": "A woman along with her lover, plan to con a rich man by marrying him and on earning his trust running away with all his money. Everything goes as planned until she actually begins to fall in love with him.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODg3Mjg0MDY4M15BMl5BanBnXkFtZTcwNjY5MDQ2NA@@._V1_SX300.jpg"
    },

    {
      "id": 21,
      "title": "The Lord of the Rings: The Two Towers",
      "year": "2002",
      "runtime": "179",
      "genres": [
        "Action",
        "Adventure",
        "Drama"
      ],
      "director": "Peter Jackson",
      "actors": "Bruce Allpress, Sean Astin, John Bach, Sala Baker",
      "cashFees": 947896241,
      "plot": "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNDU0NjY4NTheQTJeQWpwZ15BbWU2MDk4MTY2Nw@@._V1_SX300.jpg"
    },
    {
      "id": 22,
      "title": "Ex Machina",
      "year": "2015",
      "runtime": "108",
      "genres": [
        "Drama",
        "Mystery",
        "Sci-Fi"
      ],
      "director": "Alex Garland",
      "actors": "Domhnall Gleeson, Corey Johnson, Oscar Isaac, Alicia Vikander",
      "cashFees": 36869414,
      "plot": "A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUxNzc0OTIxMV5BMl5BanBnXkFtZTgwNDI3NzU2NDE@._V1_SX300.jpg"
    },
    {
      "id": 23,
      "title": "The Theory of Everything",
      "year": "2014",
      "runtime": "123",
      "genres": [
        "Biography",
        "Drama",
        "Romance"
      ],
      "director": "James Marsh",
      "actors": "Eddie Redmayne, Felicity Jones, Tom Prior, Sophie Perry",
      "cashFees": 123726688,
      "plot": "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
      "posterUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMTU4MDA3NDNeQTJeQWpwZ15BbWU4MDk4NTMxNTIx._V1_SX300.jpg"
    }

  ];

  getMovies(): IMovie[] {
    return this.movies;
  }
}

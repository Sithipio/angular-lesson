export interface IMovie {
  id: number,
  title: string,
  year: string,
  runtime: string,
  genres: string[]
  director: string,
  actors: string[],
  cashFees : number,
  createdData: string,
  plot: string,
  posterUrl: string
}

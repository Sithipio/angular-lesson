export interface IMovie {
  id: string,
  title: string,
  year: string,
  actors: string[],
  cashFees : number,
  createdData: string,
  isFavorite: boolean,
  posterUrl: string
}

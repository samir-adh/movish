import { Movie } from "../model/movie";

export const movieList = [
  new Movie(
    "Trainspotting",
    "Danny Boyle",
    1996,
    "https://fr.web.img6.acsta.net/medias/nmedia/18/65/54/67/19816073.jpg"
  ),

  new Movie(
    "Filth",
    "Jon S. Baird",
    2013,
    "https://m.media-amazon.com/images/M/MV5BMjE2NTgyMzM0NV5BMl5BanBnXkFtZTgwNzkwNDE1MzE@._V1_.jpg"
  ),
].sort((a, b) => {
  if (a.title > b.title) {
    return 1;
  } else if (a.title < b.title) {
    return -1;
  } else {
    return 0;
  }
});

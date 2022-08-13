export function sortFavouriteFilms(films) {
  return films.filter((film) => film.isFavourite).sort((a, b) => b.id - a.id);
}

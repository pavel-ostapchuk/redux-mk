export function sortByIsFavourite(films) {
  return films.sort((a, b) => a.id - b.id).sort((a) => (a.isFavourite ? -1 : 1));
}

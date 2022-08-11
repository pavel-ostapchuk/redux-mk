import React, { useState } from 'react';
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { fromStorage } from 'utils/fromStorage';
import FilmCard from 'enitites/AllFilmsPage/components/FilmCard';
import { filmsMock } from 'constants/filmsMock';

const FavouriteFilmsPage = () => {
  const [allFilmsList, setAllfillms] = useState(fromStorage(ALL_FILMS) || filmsMock);

  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || []);
  if (!favouriteFilmsList.length) return <div>Список пуст</div>;

  return favouriteFilmsList.map((film) => (
    <React.Fragment key={film.id}>
      <FilmCard
        filmData={film}
        setAllfillms={setAllfillms}
        setFavouriteFilmsList={setFavouriteFilmsList}
      />
    </React.Fragment>
  ));
};

export default FavouriteFilmsPage;

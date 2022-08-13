import FilmCard from 'common/FilmCard';
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { filmsMock } from 'constants/filmsMock';
import React, { useState } from 'react';
import { fromStorage } from 'utils/fromStorage';

const FavouriteFilmsPage = () => {
  const [_, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock);
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || []);

  return favouriteFilmsList.length ? (
    favouriteFilmsList.map((film) => (
      <React.Fragment key={film.id}>
        <FilmCard
          film={film}
          setAllFilmsList={setAllFilmsList}
          setFavouriteFilmsList={setFavouriteFilmsList}
        />
      </React.Fragment>
    ))
  ) : (
    <div>List is empty.</div>
  );
};

export default FavouriteFilmsPage;

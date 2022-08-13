import FilmCard from 'common/FilmCard';
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { filmsMock } from 'constants/filmsMock';
import React, { useEffect, useState } from 'react';
import { fromStorage } from 'utils/fromStorage';
import { toStorate } from 'utils/toStorage';

const AllFilmsPage = () => {
  const [allFilmsList, setAllFilmsList] = useState(fromStorage(ALL_FILMS) || filmsMock);
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || []);

  useEffect(() => {
    if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
      toStorate(ALL_FILMS, allFilmsList);
      toStorate(FAVOURITE_FILMS, favouriteFilmsList);
    }
  }, [allFilmsList, favouriteFilmsList]);

  return allFilmsList.map((film) => (
    <React.Fragment key={film.id}>
      <FilmCard
        film={film}
        setAllFilmsList={setAllFilmsList}
        setFavouriteFilmsList={setFavouriteFilmsList}
      />
    </React.Fragment>
  ));
};

export default AllFilmsPage;

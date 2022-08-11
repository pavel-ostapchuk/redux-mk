import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { filmsMock } from 'constants/filmsMock';
import React, { useEffect, useState } from 'react';
import { fromStorage } from 'utils/fromStorage';
import { toStorage } from 'utils/toStorage';
import { Link, useHistory } from 'react-router-dom';
import FilmCard from './components/FilmCard';
import style from './index.module.scss';

const AllFilmsPage = () => {
  const [allFilmsList, setAllfillms] = useState(fromStorage(ALL_FILMS) || filmsMock);
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || []);

  useEffect(() => {
    if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
      toStorage(ALL_FILMS, filmsMock);
      toStorage(FAVOURITE_FILMS, []);
      setAllfillms(fromStorage(ALL_FILMS, filmsMock));
      setFavouriteFilmsList(fromStorage(FAVOURITE_FILMS, []));
    }
  }, [allFilmsList, favouriteFilmsList]);

  return (
    <>
      {allFilmsList.map((film) => (
        <React.Fragment key={film.id}>
          <FilmCard
            filmData={film}
            setAllfillms={setAllfillms}
            setFavouriteFilmsList={setFavouriteFilmsList}
          />
        </React.Fragment>
      ))}
    </>
  );
};

export default AllFilmsPage;

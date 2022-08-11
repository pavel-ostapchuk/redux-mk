import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import { filmsMock } from 'constants/filmsMock';
import React, { useEffect, useState } from 'react';
import { fromStorage } from 'utils/fromStorage';
import { toStorage } from 'utils/toStorage';
import { Link, useHistory } from 'react-router-dom';
import style from './index.module.scss';

const PageLayout = ({ children }) => {
  const [allFilmsList, setAllfillms] = useState(fromStorage(ALL_FILMS) || filmsMock);
  const [favouriteFilmsList, setFavouriteFilmsList] = useState(fromStorage(FAVOURITE_FILMS) || []);

  const [switchListBtnUrl, setSwitchListBtnUrl] = useState('');
  useEffect(() => {
    if (!fromStorage(ALL_FILMS) && !fromStorage(FAVOURITE_FILMS)) {
      toStorage(ALL_FILMS, filmsMock);
      toStorage(FAVOURITE_FILMS, []);
      setAllfillms(fromStorage(ALL_FILMS, filmsMock));
      setFavouriteFilmsList(fromStorage(FAVOURITE_FILMS, []));
    }
  }, [allFilmsList, favouriteFilmsList]);

  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/favourite_films') {
      setSwitchListBtnUrl('/films_all');
    }
    if (history.location.pathname === '/films_all') {
      setSwitchListBtnUrl('/favourite_films');
    }
  }, [history.location, switchListBtnUrl]);

  return (
    <div className={style.films_container}>
      <h1 className={style.film_cards_container__title}>All Films</h1>
      <Link to="/films_all">
        <button type="button" className={style.film_cards_container__favourite_films}>
          See All Films
        </button>
      </Link>
      <Link to="/favourite_films">
        <button type="button" className={style.film_cards_container__favourite_films}>
          See Favourite Films
        </button>
      </Link>

      <div id={ALL_FILMS} className={style.film_cards_container}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;

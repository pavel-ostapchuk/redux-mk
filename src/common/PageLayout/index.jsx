import React from 'react';
import { Link } from 'react-router-dom';
import style from './index.module.scss';

const PageLayout = ({ children }) => (
  <div className={style.films_container}>
    <h1 className={style.film_cards_container__title}>All Films</h1>
    <Link to="/films_all">
      <button className={style.films_cards_container__favourite_films} type="button">
        See All Films
      </button>
    </Link>

    <Link to="/films_favourite">
      <button className={style.films_cards_container__favourite_films} type="button">
        See Favourite Films
      </button>
    </Link>
    <div className={style.films_cards_container}>{children}</div>
  </div>
);

export default PageLayout;

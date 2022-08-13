/* eslint-disable jsx-a11y/no-static-element-interactions */
import FilmCardModal from 'common/FilmCardModal';
import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import React, { useState } from 'react';
import { fromStorage } from 'utils/fromStorage';
import { sortByIsFavourite } from 'utils/sortByIsFavourite';
import { sortFavouriteFilms } from 'utils/sortFavouriteFilms';
import { toStorate } from 'utils/toStorage';

import style from './index.module.scss';

const FilmCard = ({ film, setAllFilmsList, setFavouriteFilmsList }) => {
  const { id, imgUrl, movieName, releaseYear, isFavourite } = film;

  const [btnImg, setBtnImg] = useState(isFavourite ? 'favourite.png' : 'notFavourite.png');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddToFavourites = () => {
    const currentAllFilmsList = fromStorage(ALL_FILMS);
    const filteredAllFilmsList = currentAllFilmsList.filter((_film) => _film.id !== id);

    let updatedAllFilmsList = [];
    let updatedFilmsSortedByIsFavourite = [];

    if (!isFavourite) {
      updatedAllFilmsList = sortByIsFavourite([
        { ...film, isFavourite: true },
        ...filteredAllFilmsList,
      ]);
      updatedFilmsSortedByIsFavourite = sortFavouriteFilms(updatedAllFilmsList);

      toStorate(ALL_FILMS, updatedAllFilmsList);
      setAllFilmsList(updatedAllFilmsList);

      toStorate(FAVOURITE_FILMS, updatedFilmsSortedByIsFavourite);
      setFavouriteFilmsList(updatedFilmsSortedByIsFavourite);

      setBtnImg('favourite.png');
      return;
    }

    updatedAllFilmsList = sortByIsFavourite([
      { ...film, isFavourite: false },
      ...filteredAllFilmsList,
    ]);

    updatedFilmsSortedByIsFavourite = sortFavouriteFilms(updatedAllFilmsList);

    toStorate(ALL_FILMS, updatedAllFilmsList);
    setAllFilmsList(updatedAllFilmsList);

    toStorate(FAVOURITE_FILMS, updatedFilmsSortedByIsFavourite);
    setFavouriteFilmsList(updatedFilmsSortedByIsFavourite);

    setBtnImg('notFavourite.png');
  };

  return (
    <div className={style.film_card}>
      <img className={style.film_card__poster} alt="pic" src={require(`/src/${imgUrl}`)} />
      <div className={style.film_card__title} onClick={() => setIsModalVisible(true)}>
        {movieName}
      </div>
      <div className={style.film_card__year}>{releaseYear}</div>
      <button className={style.film_card__button} type="button" onClick={handleAddToFavourites}>
        <img
          className={style.film_card__button_img}
          alt="pic"
          src={require(`/src/assets/img/${btnImg}`)}
        />
      </button>
      {isModalVisible && <FilmCardModal film={film} setIsModalVisible={setIsModalVisible} />}
    </div>
  );
};

export default FilmCard;

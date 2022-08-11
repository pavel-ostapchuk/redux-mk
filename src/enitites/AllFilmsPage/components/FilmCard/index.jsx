import { ALL_FILMS, FAVOURITE_FILMS } from 'constants/constants';
import React, { useState } from 'react';
import { fromStorage } from 'utils/fromStorage';
import { toStorage } from 'utils/toStorage';
import style from './index.module.scss';

const FilmCard = ({ filmData, setAllfillms, setFavouriteFilmsList }) => {
  const { id, imgUrl, movieName, releaseYear, isFavourite, description } = filmData;
  const [btnImg, setBtnImg] = useState(isFavourite ? 'favourite.png' : 'notFavourite.png');

  const handleAddToFavourites = () => {
    const currentFavouriteFilms = fromStorage(FAVOURITE_FILMS);
    const currentAllFilms = fromStorage(ALL_FILMS);
    if (!isFavourite) {
      setBtnImg('favourite.png');
      toStorage(FAVOURITE_FILMS, [{ ...filmData, isFavourite: true }, ...currentFavouriteFilms]);
      setFavouriteFilmsList([{ ...filmData, isFavourite: true }, ...currentFavouriteFilms]);

      const updatedFilmsList = currentAllFilms.filter((film) => film.id !== id);
      toStorage(ALL_FILMS, [{ ...filmData, isFavourite: true }, ...updatedFilmsList]);
      setAllfillms([{ ...filmData, isFavourite: true }, ...updatedFilmsList]);

      return;
    }
    setBtnImg('notFavourite.png');

    const updatedFavouriteFilmsList = currentFavouriteFilms.filter((film) => film.id !== id);
  };
  return (
    <div className={style.film_card}>
      <img alt="pic" className={style.film_card__poster} src={require(`/src/${imgUrl}`)} />
      <div className={style.film_card__title}>{movieName}</div>
      <div className={style.film_card__year}>{releaseYear}</div>
      <button type="button" className={style.film_card__button} onClick={handleAddToFavourites}>
        <img
          alt="pic"
          className={style.film_card__button_img}
          src={require(`/src/assets/img/${btnImg}`)}
        />
      </button>
    </div>
  );
};

export default FilmCard;

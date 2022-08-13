/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import style from './index.module.scss';

const FilmCardModal = ({ film, setIsModalVisible }) => {
  const { imgUrl, movieName, releaseYear, isFavourite, description } = film;

  const btnImg = isFavourite ? 'favourite.png' : 'notFavourite.png';

  const crossImg = 'cross.png';

  return (
    <div className={style.modal}>
      <div className={style.modal_content}>
        <div type="button" className={style.close_modal} onClick={() => setIsModalVisible(false)}>
          <img
            className={style.close_modal_icon}
            alt="pic"
            src={require(`/src/assets/img/${crossImg}`)}
          />
        </div>

        <img className={style.film_card__poster} alt="pic" src={require(`/src/${imgUrl}`)} />
        <div className={style.film_card__title}>{movieName}</div>
        <div className={style.film_card__year}>{releaseYear}</div>
        <div className={style.film_card__description}>{description}</div>
        <button className={style.film_card__button} type="button">
          <img
            className={style.film_card__button_img}
            alt="pic"
            src={require(`/src/assets/img/${btnImg}`)}
          />
        </button>
      </div>
    </div>
  );
};

export default FilmCardModal;

import { Link } from 'react-router-dom';

import bookNoImg from '../assets/img/book-no-image.png';

export function BookCardList(props) {
  const ratingStars = props.rating === null ? 'No' : Math.floor(props.rating);
  const ratingStyle = `book-card-list__info__rating stars${ratingStars}`;
  const pathBook = '/books/all/'.concat(props.id);

  return (
    <Link to={pathBook}>
      <div className='book-card-list' data-test-id='card'>
        <img
          className='book-card-list__img'
          src={props.image === null ? bookNoImg : `https://strapi.cleverland.by${props.image.url}`}
          alt='Book cover'
        />
        <div className='book-card-list__info'>
          <div className='book-card-list__info__title-author'>
            <div className='book-card-list__info__title'>
              {props.title.length > 40 ? `${props.title.slice(0, 40)}...` : `${props.title}.`}
            </div>
            <div className='book-card-list__info__author'>
              {props.authors.map((elem) => `${elem}, `)} {props.issueYear}
            </div>
          </div>
          <div className='book-card-list__info__rating-button'>
            <div className={ratingStyle}>{props.rating === null ? 'ещё нет оценок' : null}</div>
            <button className='button button_active book-card__button' type='button'>Забронировать</button>
          </div>
        </div>
      </div>
    </Link>
  );
}


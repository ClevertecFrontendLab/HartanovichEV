import { Link } from 'react-router-dom';

import bookNoImg from '../assets/img/book-no-image.png';

export function BookCardTile(props) {
  const ratingStars = props.rating === null ? 'No' : Math.floor(props.rating);
  const ratingStyle = `book-card-tile__info__rating stars${ratingStars}`;
  const pathBook = '/books/all/'.concat(props.id);

  return (
    <Link to={pathBook}>
      <div className='book-card-tile' data-test-id='card'>
        <div className='book-card-tile__info'>
          <img
            className='book-card-tile__info__img'
            src={props.image === null ? bookNoImg : `https://strapi.cleverland.by${props.image.url}`}
            alt='Book cover'
          />
          <div className={ratingStyle}>{props.rating === null ? 'ещё нет оценок' : null}</div>
          <div className='book-card-tile__info__title'>
            {props.title.length > 40 ? `${props.title.slice(0, 40)}...` : `${props.title}.`}
          </div>
          <div className='book-card-tile__info__author'>
            {props.authors.map((elem) => `${elem}, `)} {props.issueYear}
          </div>
        </div>
        <button className='button button_active book-card__button' type='button'>Забронировать</button>
      </div>
    </Link>
  );
}
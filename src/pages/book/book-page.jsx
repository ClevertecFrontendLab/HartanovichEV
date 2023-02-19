import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';

import bookNoImg from '../../assets/img/book-no-image.png';
import { ErrorMessage } from '../../components/error-message';
import { Loader } from '../../components/loader';
import { Review } from '../../components/review';
import { Slider } from '../../components/slider';

import '../../scss/app.scss';

export const BookPage = () => {
  
  const [isReviewOpen, toggleReview] = useState(false);

  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentBook, setCurrentBook] = useState({});
  const srcBook = `https://strapi.cleverland.by/api/0books/${params.id}`;

  useEffect(() => {
    window.scroll(0,0);
    axios
      .get(srcBook)
      .then((data) => {
        setCurrentBook(data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) setIsLoading(false);
      });
  }, [srcBook]);

  const categoriesBook = currentBook.categories ? currentBook.categories.map((elem) => `${elem} `) : null;
  const authorsBook = currentBook.authors ? currentBook.authors.map((elem) => `${elem}, `) : null;
 
  const ratingStars = currentBook.rating === null ? 'No' : Math.floor(currentBook.rating);
  const ratingStyle = `book-page__detail-info__rating-bg stars${ratingStars}`;
  const detailInfoArray1 = [
    ['Издательство', currentBook.publish],
    ['Год издания', currentBook.issueYear],
    ['Страниц', currentBook.pages],
    ['Переплёт', currentBook.cover],
    ['Формат', currentBook.format],
  ];
  const detailInfoArray2 = [
    ['Жанр', categoriesBook],
    ['Вес', `${currentBook.weight} г`],
    ['ISBN', currentBook.ISBN],
    ['Издатель', currentBook.producer],
  ];
 
  return (
    <div>
      <Loader isLoading={isLoading}/>
      {!isLoading && Object.keys(currentBook).length === 0 && <ErrorMessage />}
      <div className='book-list-mini'>
        <div className='content'>
          <h2 className='container'>
            {categoriesBook} /{currentBook.title}{' '}
          </h2>
        </div>
      </div>
      <div className={classNames('wrapper', {wrapper_loading: isLoading || Object.keys(currentBook).length === 0})}>
        <section className={classNames('book-page content', {hidden: isLoading || Object.keys(currentBook).length === 0})}>
          <div className='container'>
            <div className='book-page__main-info'>
              <Slider bookImg={currentBook.images ? currentBook.images : [bookNoImg]} />
              <div className='book-page__main-info__title'>{currentBook.title}</div>
              <div className='book-page__main-info__author'>
                {authorsBook}
                {currentBook.issueYear}
              </div>
              <button
                className={
                  currentBook.buttonStyle
                    ? currentBook.buttonStyle.concat(' book-page__main-info__button')
                    : 'button button_active book-page__main-info__button'
                }
                type='button'
              >
                {currentBook.button ? currentBook.button : 'Забронировать'}
              </button>
              <div className='book-page__main-info__about'>
                <h3 className='book-page__title'>О книге</h3>
                <p>{currentBook.description}</p>
              </div>
            </div>
          </div>
          <div className='book-page__detail-info'>
            <h3 className='book-page__title'>Рейтинг</h3>
            <div className='book-page__detail-info__rating'>
              <div className={ratingStyle} />
              <div>{currentBook.rating ? currentBook.rating : 'ещё нет оценок'}</div>
            </div>
            <h3 className='book-page__title'>Подробная информация</h3>
            <div className='book-page__detail-info__table'>
              <table className='table1'>
                <tbody>
                  {detailInfoArray1.map((elem) => (
                    <tr className='row' key={elem[0]}>
                      <td className='column_1' key={elem[0]}>
                        {elem[0]}
                      </td>
                      <td className='column_2' key={elem[1]}>
                        {elem[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table className='table2'>
                <tbody>
                  {detailInfoArray2.map((elem) => (
                    <tr className='row' key={elem[0]}>
                      <td className='column_1' key={elem[0]}>
                        {elem[0]}
                      </td>
                      <td className='column_2' key={elem[1]}>
                        {elem[1]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='book-page__title book-page__title-close'>
              <h3>
                Отзывы &nbsp;
                <span>&nbsp;{currentBook.comments ? currentBook.comments.length : '0'}</span>
              </h3>
              <button type='button' onClick={() => toggleReview(!isReviewOpen)} data-test-id='button-hide-reviews'>
                <i className={classNames({ 'icon-close': !isReviewOpen }, { 'icon-open': isReviewOpen })} />
              </button>
            </div>
            <div className={classNames({ 'book-page__detail-info__review-close': !isReviewOpen })}>
              {currentBook.comments ? currentBook.comments.map((elem) => <Review key={elem.id} {...elem} />) : null}
            </div>
            <button
              className='button button_active book-page__detail-info__button'
              type='button'
              data-test-id='button-rating'
            >
              оценить книгу
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

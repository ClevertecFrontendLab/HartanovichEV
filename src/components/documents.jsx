import { articlesArray, pointsArray } from './constants/documents-array';

const ArticleRepeat = () => (
  <ol>
    <li className='documents__container__text__point'>
      {pointsArray[0]}
      <ol>
        <li className='documents__container__text__point'>{pointsArray[1]}</li>
        <li className='documents__container__text__point'>{pointsArray[2]}</li>
      </ol>
    </li>
    <li className='documents__container__text__point'>{pointsArray[3]}</li>
  </ol>
);

export const Documents = ({ name }) => (
  <div className='documents__container'>
    <h1>{name}</h1>
    <div className='documents__container__text'>
      <ol>
        <li className='documents__container__text__article'>
          {articlesArray[0]}
          <ol>
            <li className='documents__container__text__point'>{pointsArray[0]}</li>
            <li className='documents__container__text__point'>{pointsArray[1]}</li>
            <li className='documents__container__text__point'>{pointsArray[2]}</li>
            <li className='documents__container__text__point'>{pointsArray[3]}</li>
          </ol>
        </li>
        <li className='documents__container__text__article'>
          {articlesArray[1]}
          <ArticleRepeat />
        </li>
        <li className='documents__container__text__article'>
          {articlesArray[2]}
          <ArticleRepeat />
          <li className='documents__container__text__point'>
            {pointsArray[4]}
            <ol>
              <li className='documents__container__text__point'>
                {pointsArray[5]}
                <ol>
                  <li className='documents__container__text__point'>{pointsArray[6]}</li>
                  <li className='documents__container__text__point'>{pointsArray[7]}</li>
                </ol>
              </li>
            </ol>
          </li>
          <li className='documents__container__text__point'>{pointsArray[8]}</li>
        </li>
      </ol>
    </div>
  </div>
);

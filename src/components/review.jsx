export const Review = (props) => {
  
  const ratingStars = props.rating === null ? 'No' : Math.floor(props.rating);
  const ratingStyle = `book-page__detail-info__review__rating stars${ratingStars}`;

  return (
    <div className='book-page__detail-info__review'>
      <div className='book-page__detail-info__review__user-date'>
        <img
          className='book-page__detail-info__review__avatar'
          src={`https://strapi.cleverland.by${props.user.avatarUrl}`}
          alt='Avatar'
        />
        <div className='book-page__detail-info__review__user-name'>{`${props.user.firstName} ${props.user.lastName}`}</div>
        <div className='book-page__detail-info__review__date'>23 октября 2022</div>
      </div>
      <div className={ratingStyle}>{props.rating === null ? 'ещё нет оценок' : null}</div>
      {/* <img className='book-page__detail-info__review__rating' src={ratingStars} alt='Rating' /> */}
      <p>{props.text}</p>
    </div>
  );
};

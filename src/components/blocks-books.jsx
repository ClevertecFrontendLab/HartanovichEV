import { BookCardList } from './book-card-list';
import { BookCardTile } from './book-card-tile';

export const BlocksOfBooks = ({ view, allBooks }) => {
  const BookCard = view === 'tile' ? BookCardTile : BookCardList;

  return (
    <div className={'books-section__container books-section__'.concat(view)}>
      {allBooks.map((elem) => (
        <BookCard key={elem.id} {...elem} />
      ))}
    </div>
  );
};
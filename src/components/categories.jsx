import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Categories = ({
  onClickCategory,
  activePart,
  activeCategory,
  setActivePart,
  dataTestId,
  isLoading,
  categories,
}) => {
  const [isAllBooksOpen, toggleAllBooks] = useState(activePart === 0 ? true : false);

  return (
    <div className='categories'>
      <Link to='/' className='categories__part'>
        <button
          type='button'
          className={classNames('categories__all', { active_title: activePart === 0 })}
          data-test-id={dataTestId[0]}
          onClick={() => {
            toggleAllBooks(!isAllBooksOpen);
          }}
        >
          <div className={classNames({ active: activePart === 0 })}>Витрина книг</div>
          <i className={classNames({ 'icon-close': !isAllBooksOpen }, { 'icon-open': isAllBooksOpen })} />
        </button>
      </Link>
      <ul className={classNames({ hidden: !isAllBooksOpen || isLoading })}>
        <Link to='/books/all'>
          <li>
            <button
              type='button'
              onClick={() => onClickCategory(0)}
              className={classNames({ hidden: !isAllBooksOpen }, { active: activeCategory === 0 && activePart === 0 })}
              data-test-id={dataTestId[1]}
            >
              {' '}
              Все книги
            </button>
          </li>
        </Link>

        {categories
          ? categories.map((item, index) => (
              <Link to={`/books/${item.path}`}>
                <li key={item.name}>
                  <button
                    type='button'
                    onClick={() => onClickCategory(index + 1)}
                    className={classNames(
                      { hidden: !isAllBooksOpen },
                      { active: activeCategory === index + 1 && activePart === 0 }
                    )}
                  >
                    {item.name}
                    <span> &nbsp; {index}</span>
                  </button>
                </li>
              </Link>
            ))
          : null}
      </ul>
      <Link to='/terms' className='categories__part'>
        <button
          type='button'
          onClick={() => {
            setActivePart(1);
            toggleAllBooks(false);
          }}
          className={activePart === 1 ? 'active_title' : ''}
          data-test-id={dataTestId[2]}
        >
          Правила пользования
        </button>
      </Link>
      <Link to='/contract' className='categories__part'>
        <button
          type='button'
          onClick={() => {
            setActivePart(2);
            toggleAllBooks(false);
          }}
          className={activePart === 2 ? 'active_title' : ''}
          data-test-id={dataTestId[3]}
        >
          Договор оферты
        </button>
      </Link>
    </div>
  );
};

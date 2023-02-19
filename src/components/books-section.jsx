import { useState } from 'react';
import classNames from 'classnames';

import { BlocksOfBooks } from './blocks-books';

export function BooksSection({allBooks}) {
  const [activeView, setActiveView] = useState(0);
  const [activeSearch, setActiveSearch] = useState(false);

  return (
    <section className='books-section'>
      <section className={classNames('navigation', { active_search: activeSearch })}>
        <div className='navigation__search-filter'>
          <button type='button' className={classNames('button button__search', {button__search: activeSearch})} onClick={() => setActiveSearch(!activeSearch)} data-test-id='button-search-open'>
            <i className='icon-search' />
          </button>
          <form className='button' data-test-id='input-search'>
            <i className='icon-search' />
            <input className='input' type='text' placeholder='Поиск книги или автора…' />
            <button type='button' className='button-search-close' onClick={() => setActiveSearch(!activeSearch)} data-test-id='button-search-close'>
              <i className='icon-cross' />
            </button>
          </form>
          <button className='button button__filter' type='button'>
            <i className='icon-rating' />
            <div>По рейтингу</div>
          </button>
        </div>
        <div className='navigation__view'>
          <button
            onClick={() => setActiveView(0)}
            className={activeView === 0 ? 'button button__tile button_active' : 'button button__list'}
            type='button'
            data-test-id='button-menu-view-window'
          >
            <i className='icon-tile' />
          </button>
          <button
            onClick={() => setActiveView(1)}
            className={activeView === 1 ? 'button button__tile button_active' : 'button button__list'}
            type='button'
            data-test-id='button-menu-view-list'
          >
            <i className='icon-list' />
          </button>
        </div>
      </section>
      {activeView === 0 ? <BlocksOfBooks view='tile' allBooks={allBooks}/> : <BlocksOfBooks view='list' allBooks={allBooks} />}
    </section>
  );
}

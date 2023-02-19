import { Navigate, Route, Routes } from 'react-router-dom';

import { BooksSection } from '../../components/books-section';
import { Categories } from '../../components/categories';
import { Documents } from '../../components/documents';
import { BookPage } from '../book';

import '../../scss/app.scss';

export const LayoutMainPage = ({activeCategory, activePart, onClickCategory, setActivePart, isLoading, categories, allBooks }) => {
  const dataTestId = ['navigation-showcase', 'navigation-books', 'navigation-terms', 'navigation-contract'];
  // const store = useSelector(store => store);
  // console.log(store);

  return (
    <main className='main content'>
      <nav className='categories-nav'>
        <Categories
          activeCategory={activeCategory}
          activePart={activePart}
          onClickCategory={(i) => onClickCategory(i)}
          setActivePart={(i) => setActivePart(i)}
          dataTestId={dataTestId}
          isLoading={isLoading}
          categories={categories}  
        />
      </nav>
      <Routes>
        <Route path='/' element={<Navigate to='/books/all' />} />
        <Route path='/books/:category' element={isLoading === false ? <BooksSection allBooks={allBooks}/> : null} />
        <Route path='/terms' element={<Documents name='Правила пользования' />} />
        <Route path='/contract' element={<Documents name='Договор оферты' />} />
        <Route path='/books/:category/:id' element={isLoading === false ? <BookPage /> : null} />
      </Routes>
    </main>
  );
};

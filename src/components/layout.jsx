import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import classNames from 'classnames';

import { BookPage } from '../pages/book';
import { LayoutMainPage } from '../pages/main/layout-main-page';

import { BooksSection } from './books-section';
import { Documents } from './documents';
import { ErrorMessage } from './error-message';
import { Footer } from './footer';
import { Header } from './header';
import { Loader } from './loader';

import '../scss/app.scss';

export const Layout = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePart, setActivePart] = useState(0);
  const [isMenuOpen, toggleMenu] = useState(false);

  const onClickPart = (index) => {
    setActivePart(index);
    toggleMenu(false);
  };

  const onClickCategory = (index) => {
    setActiveCategory(index);
    setActivePart(0);
    toggleMenu(false);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [allBooks, setAllBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const srcAllBooks = 'https://strapi.cleverland.by/api/books';
  const srcCategories = 'https://strapi.cleverland.by/api/categories';

  useEffect(() => {
    axios.all([
      axios.get(srcAllBooks),
      axios.get(srcCategories)
    ])
    .then(response => {
      setAllBooks(response[0].data);
      setCategories(response[1].data);
      setIsLoading(false);
    })
    .catch(err => {
      if (err) setIsLoading(false);
     });
  }, []);
  
  return (
    <div>
      <Loader isLoading={isLoading}/>     
      {!isLoading && allBooks.length ===0 && <ErrorMessage />} 
      {!isLoading && categories.length ===0 && <ErrorMessage />} 
      <div className={classNames('wrapper', {wrapper_loading: isLoading})} >
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          activeCategory={activeCategory}
          activePart={activePart}
          onClickCategory={(i) => onClickCategory(i)}
          setActivePart={(i) => onClickPart(i)} 
          categories={categories}         
        />
        <Routes>
          <Route
            element={
              <LayoutMainPage
                activeCategory={activeCategory}
                activePart={activePart}
                onClickCategory={onClickCategory}
                setActivePart={setActivePart}
                isLoading={isLoading}
                categories={categories}
                allBooks={allBooks}  
              />
            }
          >
            <Route path='/' element={<Navigate to='/books/all' />} />
            <Route path='/books/:category' element={isLoading === false ? <BooksSection /> : null} />
            <Route path='/terms' element={<Documents name='Правила пользования' />} />
            <Route path='/contract' element={<Documents name='Договор оферты' />} />
          </Route>
          <Route path='/books/:category/:id' element={isLoading === false ? <BookPage /> : null} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

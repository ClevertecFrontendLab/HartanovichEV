import React from 'react';
import ReactDOM from 'react-dom/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider } from 'react-redux';
import { HashRouter, Navigate,Route, Routes } from 'react-router-dom';

import { BooksSection } from './components/books-section';
import { Documents } from './components/documents';
import { Layout } from './components/layout';
import { BookPage } from './pages/book';
import { LayoutMainPage } from './pages/main/layout-main-page';
import { store } from './redux/store';

import './index.css';
import './iconsfont.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<LayoutMainPage />}>
              <Route path='/' element={<Navigate to='/books/all' />} />
              <Route path='/books/:category' element={<BooksSection />} />
              <Route path='/terms' element={<Documents name='Правила пользования' />} />
              <Route path='/contract' element={<Documents name='Договор оферты' />} />
            </Route>
            <Route path='/books/:category/:id' element={<BookPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

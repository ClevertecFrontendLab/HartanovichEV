import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import avatar from '../assets/img/avatar.png';
import logo from '../assets/img/logo.png';

import { Categories } from './categories';

export const Header = ({ isMenuOpen, toggleMenu, activeCategory, activePart, onClickCategory, setActivePart, categories }) => {
  const menuRef = React.useRef();
  const burgerRef = React.useRef();
  const dataTestId = ['burger-showcase', 'burger-books', 'burger-terms', 'burger-contract']
  
  React.useEffect(() => {
    const handleClickOutside = (event) =>{
        const menuPath = event.composedPath().includes(menuRef.current);
        const burgerPath = event.composedPath().includes(burgerRef.current);
  
        if (!burgerPath && !menuPath && isMenuOpen) toggleMenu(!isMenuOpen);
     }

    document.body.addEventListener('click', handleClickOutside);
    
    return () => document.body.removeEventListener('click', handleClickOutside);
  });

  return (
    <header>     
      <div className='header content'>              
        <div className='container'>
          <div className='header__logo'>
            <Link to='/'>
              <img width='165' src={logo} alt='Logo clevertec' />
            </Link>
          </div>
          <button
            type='button'
            data-test-id='button-burger'
            ref={burgerRef}
            onClick={() => toggleMenu(!isMenuOpen)}
            className={classNames('header__burger-menu', { active_menu: isMenuOpen })}
          >
            <span className='header__burger-menu__bar' />
            <span className='header__burger-menu__bar' />
            <span className='header__burger-menu__bar' />
          </button>
          <h1>Библиотека</h1>
          <div className='header__person'>
            <div className='header__person__name'>Привет, Иван!</div>
            <img width='58' src={avatar} alt='Logo clevertec' />
          </div>
        </div>
      </div>
      <div className={classNames('content', { hidden: !isMenuOpen })}>
        <div ref={menuRef} className='hidden-menu' data-test-id='burger-navigation'>
          <Categories
            activeCategory={activeCategory}
            activePart={activePart}
            onClickCategory={(i) => onClickCategory(i)}
            setActivePart={setActivePart}
            dataTestId = {dataTestId}
            toggleMenu = {toggleMenu}
            isMenuOpen = {isMenuOpen}            
            categories={categories} 
          />
          <div className='hidden-menu__profile categories'>
            <Link to='/'>
              <button type='button' onClick={() => {
                setActivePart(3);
                toggleMenu(!isMenuOpen);
                }} className={activePart === 3 ? 'active-title' : ''}>
                Профиль
              </button>
            </Link>
            <Link to='/'>
              <button type='button' onClick={() => {
                setActivePart(4)
                toggleMenu(!isMenuOpen);
                }} className={activePart === 4 ? 'active-title' : ''}>
                Выход
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

import { iconArray } from './constants/icons-array';

export const Footer = () => (
  <footer className='footer content'>
    <div className='footer__container'>
      <div className='footer__title'>© 2020-2023 Cleverland. Все права защищены.</div>
      <div className='footer__icon-social'>
        {
          iconArray.map((elem) => (
            <a key={elem[1]} href={elem[0]}>
              <i className={'icon-'.concat(elem[1])} />
            </a>
          ))
        }
      </div>
    </div>
  </footer>
);


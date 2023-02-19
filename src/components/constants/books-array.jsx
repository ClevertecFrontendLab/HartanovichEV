import slider1 from '../../assets/img/book-page-image.png';
import slider2 from '../../assets/img/slider2.jpg';
import slider3 from '../../assets/img/slider3.png';
import slider4 from '../../assets/img/slider4.jpg';

export const books = [
  {
    id: 1,
    ratingBg: 'No',
    rating: 'ещё нет оценок',
  },
  {
    id: 2,
    title: 'Грокаем алгоритмы. Иллюстрированное',
    bookImg: [slider1],
  },
  {
    id: 3,
    title: 'Грокаем алгоритмы.',
    button: 'занята до 03.05',
    buttonStyle: 'button button_reserved book-card__button',
    bookImg: [slider1, slider2, slider3, slider4],
  },
  {
    id: 4,
  },
  {
    id: 5,
    author: 'Адитья Бхаргава, Патрик Нимейер',
    button: 'Забронирована',
    buttonStyle: 'button button_booked book-card__button',
  },
  {
    id: 6,
    bookImg: [slider1, slider2, slider3],
    ratingBg: 'No',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    button: 'занята до 23.04',
    buttonStyle: 'button button_reserved book-card__button',
  },
  {
    id: 7,
    bookImg: [slider1, slider2, slider3, slider4],
    ratingBg: 'No',
    rating: 'ещё нет оценок',
    title: 'Грокаем алгоритмы. Иллюстрированное',
    author: 'Адитья Бхаргава, Патрик Нимейер',
    button: 'занята до 23.04',
    buttonStyle: 'button button_reserved book-card__button',
  },
  {
    id: 8,
    title: 'Грокаем алгоритмы.',
    author: 'Адитья Бхаргава, Патрик Нимейер',
  },
  {
    id: 9,
    author: 'Адитья Бхаргава, Патрик Нимейер',
  },
  {
    id: 10,
  },
  {
    id: 11,
    bookImg: [slider1],
  },
];

const book = {
  id: 1,
  title: 'Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих',
  rating: 4.3,
  issueYear: '2019',
  description:
    'Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены, протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?\nОткройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать алгоритмы — это веселое и увлекательное занятие.',
  publish: 'Питер',
  pages: '288',
  cover: 'Мягкая обложка',
  weight: '370',
  format: '70х100',
  ISBN: '978-5-4461-0923-4',
  producer: 'ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург, Петергофское ш, д. 73, лит. А29',
  authors: ['Адитья Бхаргава'],
  images: [
    {
      url: '/uploads/image_book_5e25f0be0d.jpg',
    },
    {
      url: '/uploads/image_book_5e25f0be0d.jpg',
    },
  ],
  categories: ['Зарубежная литература', 'Компьютерная литература'],
  comments: [
    {
      id: 1,
      rating: 4,
      text: 'Самая лучшая книга в мире',
      createdAt: '2022-10-23T12:23:13.012Z',
      user: {
        commentUserId: 6,
        firstName: 'Aliaksei',
        lastName: 'Valadzko',
        avatarUrl: 'https://strapi.cleverland.by/uploads/thumbnail_Screenshot_3_1016a62c87.png',
      },
    },
  ],
  booking: {
    id: 7,
    order: true,
    dateOrder: '2022-10-24T00:00:00.000Z',
    customerId: 6,
    customerFirstName: 'Алексей',
    customerLastName: 'Володько',
  },
  delivery: {
    id: 7,
    handed: true,
    dateHandedFrom: '2022-10-24T00:00:00.000Z',
    dateHandedTo: '2022-10-28T00:00:00.000Z',
    recipientId: 6,
    recipientFirstName: 'Ал',
    recipientLastName: 'Вал',
  },
  histories: [
    {
      id: 1,
      userId: 7,
    },
  ],
};

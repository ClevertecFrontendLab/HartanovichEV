import { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Navigation, Pagination, Thumbs } from 'swiper';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

export const Slider = ({bookImg}) => {
  const [activeSlide, setActiveSlide] = useState();

  return (
    <div className='slider'>
      <div  data-test-id='slide-big' className='slider__activeSlide'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={ window.innerWidth > 1049 ? [Navigation, Thumbs] : [Navigation, Pagination]}
          grabCursor={true}
          thumbs={ window.innerWidth > 1049 ? { swiper: activeSlide && !activeSlide.destroyed ? activeSlide : null } : null}
          className='mySwiper2'
        >
          {bookImg.map((img) => (
            <SwiperSlide key={img.url}>
              <img src={ `https://strapi.cleverland.by${img.url}`} alt='Slider Images' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='slider__allSlides'>
        {bookImg.length > 1 ?
        <Swiper
          onSwiper={setActiveSlide}
          loop={true}
          spaceBetween={0}
          slidesPerView={4}
          modules={[Navigation, Thumbs]}
          className='mySwiper'
        >
          {bookImg.map((img) => (
            <SwiperSlide key={img.url} data-test-id='slide-mini'>
              <img src={`https://strapi.cleverland.by${img.url}`} alt='Slider Images' />
            </SwiperSlide>
          ))}
        </Swiper> :
        null }
      </div>
    </div>
  );
};

import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

export default function ListSlider() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(25);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 25 })
  );

  const prepend = () => {
    setSlides([
      `${prependNumber.current - 2}`,
      `${prependNumber.current - 1}`,
      ...slides,
    ]);
  };

  const append = () => {
    setSlides([...slides, '' + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        className="h-24 w-5xl mt-8 p-28"
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={10}
        centeredSlides={false}
        spaceBetween={35}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide className="bg-red-500 rounded-full" virtualIndex={index}>
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
        </button>
        <button onClick={() => slideTo(200)} className="prepend-slide">
        </button>
        <button onClick={() => slideTo(250)} className="slide-250">
        </button>
        <button onClick={() => slideTo(500)} className="slide-500">
        </button>
        <button onClick={() => append()} className="append-slides">
        </button>
      </p>
    </>
  );
}
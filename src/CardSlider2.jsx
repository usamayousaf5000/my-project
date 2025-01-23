import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

export default function CardSlider2() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(20);
  const prependNumber = useRef(1);
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    Array.from({ length: 20 })
  );


  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
      className="h-80"
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={6}
        centeredSlides={false}
        spaceBetween={20}
        navigation={true}
        pagination={{clickable:true}}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide className="bg-sky-400 max-w-md rounded-xl" key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => prepend()} className="prepend-2-slides">
        </button>
        <button onClick={() => slideTo(1)} className="prepend-slide">
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

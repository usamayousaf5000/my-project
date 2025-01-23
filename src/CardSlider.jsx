import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

export default function CardSlider() {
  const navigate  = useNavigate()
  const [swiperRef, setSwiperRef] = useState(null);
  const initialSlides = Array.from({ length: 20 });
  // Create array with 500 slides
  const [slides, setSlides] = useState(
    initialSlides
  );

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  

  return (
    <>
    <div className="container">
      <button onClick={()=>{navigate('/Seeall')}} className="px-2 py-3 border-none bg-black text-white">See All</button>
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
          <SwiperSlide className="bg-zinc-400 max-w-md rounded-xl" key={slideContent} virtualIndex={index}>
            {slideContent}
          </SwiperSlide>
        ))}
      </Swiper>

      <p className="append-buttons">
        <button onClick={() => slideTo(1)} className="prepend-slide">
        </button>
        <button onClick={() => slideTo(10)} className="slide-250">
        </button>
        <button onClick={() => slideTo(20)} className="slide-500">
        </button>
      </p>
        </div>
    </>
  );
}

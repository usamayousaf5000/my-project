import React, { useRef, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './index.css';

export default function CardSlider() {
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);

  const slides = [
    { id: 1, image: 'src/assets/images/A1.jpg' },
    { id: 2, image: 'src/assets/images/A2.jpg' },
    { id: 3, image: 'src/assets/images/A3.jpg' },
    { id: 4, image: 'src/assets/images/A4.jpg' },
    { id: 5, image: 'src/assets/images/A5.jpg' },
    { id: 6, image: 'src/assets/images/A6.jpg' },
    { id: 7, image: 'src/assets/images/A1.jpg' },
    { id: 8, image: 'src/assets/images/A2.jpg' },
    { id: 9, image: 'src/assets/images/A3.jpg' },
    { id: 10, image: 'src/assets/images/A4.jpg' }
  ];

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

 
  return (
    <>
      <div className="container">
        <button
          onClick={() => {
            navigate('/Seeall');
          }}
          className="px-2 py-3 border-none bg-black text-white mb-4"
        >
          See All
        </button>
        <Swiper
          className="h-auto"
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={5} 
          centeredSlides={false}
          spaceBetween={20}
          navigation={true}
          pagination={{ clickable: true }}
          virtual
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              className="bg-white shadow-md rounded-xl flex flex-col items-center cursor-pointer"
              key={slide.id}
              virtualIndex={index}
            >
              <div className="h-96 w-11/12 overflow-hidden rounded-xl">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <p className="append-buttons mt-4 flex justify-center gap-4">
          <button
            onClick={() => slideTo(1)}
          >
          </button>
          <button
            onClick={() => slideTo(5)}
          >
          </button>
          <button
            onClick={() => slideTo(10)}
          >
          </button>
        </p>
      </div>
    </>
  );
}
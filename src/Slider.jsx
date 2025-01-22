import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './index.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="flex justify-between items-center h-96 ">
        <SwiperSlide className="bg-orange-600 h-40 text-white">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-red-600 h-40 text-white">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-yellow-500 h-40 text-white" >Slide 3</SwiperSlide>
        <SwiperSlide className="bg-lime-500 h-40 text-white">Slide 4</SwiperSlide>
        <SwiperSlide className="bg-green-800 h-40 text-white">Slide 5</SwiperSlide>
        <SwiperSlide className="bg-teal-400 h-40 text-white">Slide 6</SwiperSlide>
        <SwiperSlide className="bg-black h-40 text-white">Slide 7</SwiperSlide>
        <SwiperSlide className="bg-emerald-700 h-40 text-white">Slide 8</SwiperSlide>
        <SwiperSlide className="bg-blue-700
         h-40 text-white">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

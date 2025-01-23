import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './index.css';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function AutoSlider() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 1000, 
          disableOnInteraction: false,
        }}
        className="flex justify-between items-center h-96 mb-7"
      >
        <SwiperSlide className="h-40">
          <img
            className="w-full bg-cover"
            alt="image1"
            src={"src/assets/images/image2.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-40">
          <img
            className="w-full bg-cover"
            alt="image2"
            src={"src/assets/images/image3.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-40">
          <img
            className="w-full bg-cover"
            alt="image3"
            src={"src/assets/images/image4.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-40">
          <img
            className="w-full bg-cover"
            alt="image4"
            src={"src/assets/images/image5.jpg"}
          />
        </SwiperSlide>
        <SwiperSlide className="h-40">
          <img
            className="w-full bg-cover"
            alt="image5"
            src={"src/assets/images/image6.jpg"}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function BrandSlider() {
  const brandNames = [
    "BLACK+DECKER",
    "Revolution",
    "Samsung",
    "Bourjois",
    "Vichy",
    "Huawei",
    "Momcozy",
    "Puma",
    "Garnier",
    "Ugreen",
    "La Roche-Posay",
    "Blu",
    "NYX",
    "Philips Avent",
    "American Eagle",
    "Adidas",
  ];

  const groupedBrands = [];
  for (let i = 0; i < brandNames.length; i += 2) {
    groupedBrands.push(brandNames.slice(i, i + 2));
  }

  return (
    <div className="bg-gray-100 py-8 mb-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Explore official brand stores
        </h2>
        <Swiper
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={16}
          navigation
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 8 },
            768: { slidesPerView: 4, spaceBetween: 12 },
            1024: { slidesPerView: 6, spaceBetween: 16 },
          }}
        >
          {groupedBrands.map((brandGroup, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col items-center justify-center bg-white rounded-md shadow-md p-4"
            >
              {brandGroup.map((brand, idx) => (
                <div
                  key={idx}
                  className="mb-4 last:mb-0 flex items-center justify-center h-16 w-full bg-gray-200 text-gray-600 font-medium rounded"
                >
                  {brand}
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

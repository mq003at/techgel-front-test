"use client"; 

import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { ImageWrapperProps } from "../Misc/ImageWrapper";


export default function MainCarousel() {
  const carouselImages: ImageWrapperProps[] = [
    {
      src: "/assets/long-thanh-banner1.webp",
      alt: "long-thanh",
      title: "LONG THÀNH",
    },

    {
      src: "/assets/quoc-lo-1a.webp",
      alt: "quoc-lo-1a",
      title: "QUỐC LỘ 1A",
    },
    {
      src: "/assets/quoc-te-noi-bai.webp",
      alt: "quoc-te-noi-bai",
      title: "SÂN BAY QUỐC TẾ NỘI BÀI",
    },
  ];

  return (
    <div className="w-full [h-500px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation 
        pagination={{ clickable: true }} 
        autoplay={{ delay: 5000, disableOnInteraction: false }} 
        loop={true} 
        className="w-full h-[500px]"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
              />
              <h3 className="absolute bottom-4 left-[250px] transform -translate-x-1/2 bg-black bg-opacity-50 text-white text-lg px-4 py-2 rounded">
                {image.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const partners = [
  "/images/partner-1.webp",
  "/images/partner-2.webp",
  "/images/partner-3.webp",
  "/images/partner-4.webp",
  "/images/partner-5.webp",
  "/images/partner-6.webp",
    "/images/partner-7.webp",
];

const Partners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
          <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one">
                    <span className="font-weight-300 site-text-primary">
                      trusted
                    </span>{" "}
                    partners
                  </h2>
                </div>
              </div>
            </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          spaceBetween={40}
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {partners.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={140}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;

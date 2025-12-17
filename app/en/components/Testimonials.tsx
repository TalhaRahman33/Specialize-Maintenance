"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    img: "/images/pic1_2.jpg",
    name: "Shelly Johnson -",
    role: "Business Person",
    text:
      "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 2,
    img: "/images/pic2_1.jpg",
    name: "Cuthbert Brain -",
    role: "Contractor",
    text:
      "The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 3,
    img: "/images/pic3_1.jpg",
    name: "Cathrine Wagner -",
    role: "Builder",
    text:
      "The template itself is very ext ended. excellent customer support! simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 4,
    img: "/images/pic4.jpg",
    name: "John Doe -",
    role: "Business Person",
    text:
      "Excellent Customer support!. The template itself is very ext ended. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    id: 5,
    img: "/images/pic5.jpg",
    name: "Cuthbert Brain -",
    role: "Business Person",
    text:
      "The template itself is very ext ended. excellent customer support!. simply dummy text of the printing and industry. the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

export default function Testimonials() {
  return (
    <div>
      {/* TESTIMONIALS SECTION START */}
      <div
        className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover"
        style={{ backgroundImage: "url(/images/bg6.jpg)" }} // ✅ fixed for Next.js
      >
        <div className="container">
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 site-text-primary">
                      Client
                    </span>{" "}
                    Testimonials
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}

            {/* TESTIMONIAL SLIDER START */}
            <Swiper
              modules={[Autoplay]}
              loop
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className="testimonialSwiper"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <div className="item">
                    <div className="testimonial-2 m-a30 hover-animation-1">
                      <div className="block-shadow bg-white p-a30">
                        <div className="testimonial-detail clearfix">
                          <div className="testimonial-pic radius shadow scale-in-center">
                            <Image
                              src={t.img}
                              alt={t.name}
                              width={100}
                              height={100}
                              style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                            />
                          </div>

                          <h4 className="testimonial-name m-b5">{t.name}</h4>
                          <span className="testimonial-position">{t.role}</span>
                        </div>

                        <div className="testimonial-text">
                          <span className="fa fa-quote-right" />
                          <p>{t.text}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* TESTIMONIAL SLIDER END */}
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Clients</strong>
        </div>

        {/* Optional: little spacing fix if your bullets overlap */}
        <style jsx>{`
          :global(.testimonialSwiper) {
            padding-bottom: 40px;
          }
        `}</style>
      </div>
      {/* TESTIMONIALS SECTION END */}
    </div>
  );
}

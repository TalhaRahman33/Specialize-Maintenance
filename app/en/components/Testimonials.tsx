"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay , Navigation} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ✅ REAL TESTIMONIAL CONTENT */
const testimonials = [
  {
    id: 1,
    img: "/images/pic1_2.jpg",
    name: "Shelly Johnson -",
    role: "Business Owner",
    text:
      "The team delivered our project on time with outstanding quality. Communication was clear throughout the process, and the finishing exceeded our expectations. Highly professional and reliable.",
  },
  {
    id: 2,
    img: "/images/pic2_1.jpg",
    name: "Cuthbert Brain -",
    role: "Contractor",
    text:
      "Their technical expertise and attention to detail made a huge difference on site. From electrical work to final finishing, everything was handled smoothly and efficiently.",
  },
  {
    id: 3,
    img: "/images/pic3_1.jpg",
    name: "Cathrine Wagner -",
    role: "Project Manager",
    text:
      "We worked with several vendors before, but this team stood out for their professionalism and commitment to quality. Every milestone was met without delays.",
  },
  {
    id: 4,
    img: "/images/pic4.jpg",
    name: "John Doe -",
    role: "Commercial Client",
    text:
      "Excellent workmanship and very responsive support. They understood our requirements clearly and delivered exactly what was promised, without hidden costs.",
  },
  {
    id: 5,
    img: "/images/pic5.jpg",
    name: "Cuthbert Brain -",
    role: "Facility Manager",
    text:
      "From CCTV installation to maintenance services, the experience was smooth and stress-free. A trustworthy team that focuses on long-term results.",
  },
];

export default function Testimonials() {
  return (
    <div>
      {/* TESTIMONIALS SECTION START */}
      <div
        className="section-full mobile-page-padding p-t80 p-b50 square_shape2 bg-cover"
        style={{ backgroundImage: "url(/images/bg6.jpg)" }}
      >
        <div className="container">
          <div className="section-content">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one">
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
              modules={[Autoplay , Navigation]}
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
                          <span className="testimonial-position">
                            {t.role}
                          </span>
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

        {/* <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Clients</strong>
        </div> */}

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

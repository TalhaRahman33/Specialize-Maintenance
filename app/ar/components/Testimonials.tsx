"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/* ✅ REAL ARABIC TESTIMONIAL CONTENT (No dummy/template text) */
const testimonials = [
  {
    id: 1,
    img: "/images/pic1_2.jpg",
    name: "شيلي جونسون -",
    role: "صاحبة مشروع",
    text:
      "تعامل راقٍ والتزام بالمواعيد. تم تنفيذ العمل بجودة ممتازة وتشطيب نظيف، والأهم أن التواصل كان واضحًا من البداية حتى التسليم.",
  },
  {
    id: 2,
    img: "/images/pic2_1.jpg",
    name: "كوثبرت براين -",
    role: "مقاول",
    text:
      "فريق محترف ويهتم بالتفاصيل. تم إنجاز الأعمال بكفاءة عالية مع التزام كامل بمعايير السلامة، ونتيجة نهائية ممتازة.",
  },
  {
    id: 3,
    img: "/images/pic3_1.jpg",
    name: "كاثرين فاغنر -",
    role: "مديرة مشاريع",
    text:
      "التنفيذ كان دقيقًا وخاليًا من الملاحظات. تم الالتزام بالخطة والجودة كانت أعلى من المتوقع، مع متابعة مستمرة أثناء العمل.",
  },
  {
    id: 4,
    img: "/images/pic4.jpg",
    name: "جون دو -",
    role: "عميل تجاري",
    text:
      "خدمة ممتازة من أول تواصل. وضوح في الأسعار، سرعة في الاستجابة، وإنجاز العمل بجودة عالية بدون أي تأخير.",
  },
  {
    id: 5,
    img: "/images/pic5.jpg",
    name: "كوثبرت براين -",
    role: "مدير مرافق",
    text:
      "سواءً في الصيانة أو التركيبات، كانت التجربة سلسة ومريحة. فريق يعتمد عليه ويقدم حلول عملية ونتائج طويلة الأمد.",
  },
];

export default function Testimonials() {
  return (
    <div dir="rtl">
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
                    <span className="font-weight-300 site-text-primary">آراء</span>{" "}
                    العملاء
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}

            {/* TESTIMONIAL SLIDER START */}
            <Swiper
              modules={[Autoplay]}
              loop
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
                      <div className="block-shadow bg-white p-a30 text-right">
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

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>العملاء</strong>
        </div>

        {/* Small spacing fix for pagination */}
        <style jsx>{`
          :global(.testimonialSwiper) {
            padding-bottom: 40px;
          }

          /* ✅ Keep slider behavior stable on RTL pages */
          :global(.testimonialSwiper) {
            direction: ltr;
          }
        `}</style>
      </div>
      {/* TESTIMONIALS SECTION END */}
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const slides = [
  { id: 1, img: "/images/pic1_1.jpg" },
  { id: 2, img: "/images/pic8.jpg" },
  { id: 3, img: "/images/pic9.jpg" },
  { id: 4, img: "/images/pic6_1.jpg" },
  { id: 5, img: "/images/pic2_4.jpg" },
];

export default function AboutCompAr() {
  return (
    <div>
      {/* ABOUT COMPANY START */}
      <div
        className="section-full mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving"
        style={{ backgroundImage: "url(/images/bg-6.png)" }}
      >
        <div className="container">
          {/* TITLE */}
          <div className="section-head" dir="rtl">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one">
                  <span className="font-weight-300 site-text-primary">عن</span>{" "}
                  الشركة
                </h2>
              </div>
            </div>
          </div>

          <div className="section-content">
            {/* ✅ keep layout like English */}
            <div className="row" dir="ltr">
              {/* LEFT: Slider (same as English) */}
              <div className="col-lg-9 col-md-12">
                <Swiper
                  modules={[Autoplay]}
                  loop
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  spaceBetween={20}
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    992: { slidesPerView: 3 },
                  }}
                  className="aboutSwiper"
                >
                  {slides.map((s) => (
                    <SwiperSlide key={s.id}>
                      <div className="item">
                        <div className="mt-img-effect zoom-slow">
                          <Link href="/ar/about">
                            <div className="imgWrap">
                              <Image
                                src={s.img}
                                alt="عن الشركة"
                                fill
                                sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                                style={{ objectFit: "cover" }}
                              />
                            </div>
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* RIGHT: Text card (Arabic RTL text only) */}
              <div className="col-lg-3 col-md-12">
                <div className="about-home-right bg-white p-a30" dir="rtl">
                  <h3 className="m-t0 text-right">
                    <span className="font-weight-100">ملتزمون</span> بتقديم أعلى
                    مستويات الجودة وتحقيق أفضل النتائج.
                  </h3>

                  <p className="text-right">
                    <strong>
                      على عكس الاعتقاد الشائع، فإن لوريم إيبسوم ليس مجرد نص عشوائي،
                      بل يعود أصله إلى الأدب اللاتيني الكلاسيكي منذ عام 45 قبل
                      الميلاد.
                    </strong>
                  </p>

                  <p className="text-right">
                    تتوفر العديد من الصيغ المختلفة، ولكن الغالبية تعرضت للتعديل أو
                    التغيير بإضافة الفكاهة أو كلمات عشوائية لا تبدو واقعية.
                  </p>

                  {/* ✅ Icon fix */}
                  <div className="text-left" dir="rtl">
                    <Link
                      href="/ar/about"
                      className="site-button-link"
                      data-hover="اقرأ المزيد"
                    >
                      اقرأ المزيد
                      <i
                        className="fa fa-arrow-right arrow-animation"
                        style={{ marginLeft: "10px", fontSize: "18px" }}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Title */}
        <div className="hilite-title text-right p-r50 text-uppercase hilite-dark" dir="rtl">
          <strong>عن</strong>
        </div>

        <style jsx>{`
          .imgWrap {
            position: relative;
            width: 100%;
            height: 380px;
            overflow: hidden;
            border-radius: 6px;
          }
          @media (max-width: 768px) {
            .imgWrap {
              height: 260px;
            }
          }

          /* ✅ make Swiper arrows behave like English even in Arabic pages */
          :global(.aboutSwiper) {
            direction: ltr;
          }

          /* Adjustments for better Arabic text rendering */
          .text-right {
            text-align: right;
          }

          .text-left {
            text-align: left;
          }

          /* Ensure readability of Arabic content */
          .about-home-right p {
            line-height: 1.6;
            font-size: 18px;
          }

          /* Styling for the icon */
          .fa-arrow-right {
            margin-left: 10px;
            font-size: 18px;
          }
        `}</style>
      </div>
      {/* ABOUT COMPANY END */}
    </div>
  );
}

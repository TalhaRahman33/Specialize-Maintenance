"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

/* ✅ WhatsApp Config (same as English) */
const WHATSAPP_NUMBER = "966576150857";
const WHATSAPP_TEXT = "مرحبًا، أود الاستفسار عن خدماتكم.";

const slides = [
{ id: 1, img: "/images/pic1_1.webp", link: "#" },
  { id: 2, img: "/images/weld.avif", link: "#" },
  { id: 3, img: "/images/elect.webp", link: "#" },
  { id: 4, img: "/images/pic6_1.jpg", link: "#" },
  { id: 5, img: "/images/pic2_4.jpg", link: "#" },
];

export default function AboutCompAr() {
  const goWhatsapp = () => {
    const text = encodeURIComponent(WHATSAPP_TEXT);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      {/* ABOUT COMPANY START */}
      <div
        className="section-full mobile-page-padding p-t80 p-b30 site-bg-dark bg-repeat square_shape2 bg-moving"
        style={{ backgroundImage: "url(/images/bg-6.png)" }}
      >
        <div className="container">
          {/* TITLE */}
          <div className="section-head">
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
            <div className="row">
              {/* LEFT SLIDER – EXACTLY SAME AS ENGLISH */}
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
                >
                  {slides.map((s) => (
                    <SwiperSlide key={s.id}>
                      <div className="item">
                        <div className="mt-img-effect zoom-slow">
                          <div className="imgWrap">
                            <Image
                              src={s.img}
                              alt="عن الشركة"
                              fill
                              sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* RIGHT CONTENT – SAME STRUCTURE */}
              <div className="col-lg-3 col-md-12">
                <div className="about-home-right bg-white p-a30">
                  <h3 className="m-t0">
                    <span className="font-weight-100">ملتزمون</span> بتقديم أعلى
                    مستويات الجودة وتحقيق أفضل النتائج.
                  </h3>

                  <p>
                    <strong>
                      نحن نلتزم بتقديم خدمات استثنائية تلبي احتياجات وتوقعات عملائنا
                      بأعلى معايير الجودة.
                    </strong>
                  </p>

                  <p>
                    نركز على تقديم حلول مبتكرة في مجالات البناء، والتصميم،
                    والتجديد، مع فريق عمل متخصص يسعى لتحويل أفكاركم إلى واقع ملموس.
                  </p>

                  {/* ✅ SAME BUTTON – JUST ARABIC TEXT */}
                  <div className="text-right">
                    <button
                      type="button"
                      onClick={goWhatsapp}
                      className="site-button-link"
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        fontWeight: 600,
                      }}
                    >
                      تواصل معنا
                      <i className="fa fa-whatsapp arrow-animation" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Title */}
        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>عن</strong>
        </div>
      </div>
      {/* ABOUT COMPANY END */}

      {/* IMAGE HEIGHT – SAME AS ENGLISH */}
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
      `}</style>
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// ✅ WhatsApp Config
const WHATSAPP_NUMBER = "966576150857";
const WHATSAPP_TEXT = "Hello! I would like to inquire about your services.";

const aboutSlides = [
  { id: 1, img: "/images/pic1_1.webp", link: "#" },
  { id: 2, img: "/images/weld.avif", link: "#" },
  { id: 3, img: "/images/elect.webp", link: "#" },
  { id: 4, img: "/images/pic6_1.jpg", link: "#" },
  { id: 5, img: "/images/pic2_4.jpg", link: "#" },
];

export default function AboutComp() {
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
                  <span className="font-weight-300 site-text-primary">About</span>{" "}
                  Company
                </h2>
              </div>
            </div>
          </div>

          <div className="section-content">
            <div className="row">
              {/* LEFT SLIDER */}
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
                  {aboutSlides.map((s) => (
                    <SwiperSlide key={s.id}>
                      <div className="item">
                        <div className="mt-img-effect zoom-slow">
                          <div className="imgWrap">
                            <Image
                              src={s.img}
                              alt="About"
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

              {/* RIGHT CONTENT */}
              <div className="col-lg-3 col-md-12">
                <div className="about-home-right bg-white p-a30">
                  <h3 className="m-t0">
                    <span className="font-weight-100">Committed</span> to superior
                    quality and results.
                  </h3>

                  <p>
                    <strong>
                      At our company, we are committed to delivering exceptional
                      services that meet the needs and expectations of our clients.
                    </strong>
                  </p>

                  <p>
                    We focus on providing innovative solutions in construction,
                    architecture, and renovation. Our dedicated team works tirelessly
                    to transform your ideas into reality.
                  </p>

                  {/* ✅ WHATSAPP BUTTON */}
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
                      Call to Us{" "}
                      <i className="fa fa-whatsapp arrow-animation" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase hilite-dark">
          <strong>About</strong>
        </div>
      </div>
      {/* ABOUT COMPANY END */}

      {/* IMAGE HEIGHT FIX */}
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

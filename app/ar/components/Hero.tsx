"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/images/slide1.jpg",
    title: "نحن نبني حلمك",
    desc: "حقيقة مثبتة منذ زمن طويل أن القارئ سيتشتت بسبب المحتوى المقروء.",
    btnText: "المزيد عنا",
    btnLink: "/ar/about",
  },
  {
    id: 2,
    image: "/images/slide2.jpg",
    title: "من الفكرة إلى التنفيذ",
    desc: "حقيقة مثبتة منذ زمن طويل أن القارئ سيتشتت بسبب المحتوى المقروء.",
    btnText: "المزيد عنا",
    btnLink: "/ar/about",
  },
  {
    id: 3,
    image: "/images/slide3.jpg",
    title: "نحوّل الأحلام إلى واقع",
    desc: "حقيقة مثبتة منذ زمن طويل أن القارئ سيتشتت بسبب المحتوى المقروء.",
    btnText: "المزيد عنا",
    btnLink: "/ar/about",
  },
];

export default function Hero() {
  return (
    <section className="hero" dir="rtl">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        className="heroSwiper"
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="slide">
              {/* Background Image */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                priority={s.id === 1}
                sizes="100vw"
                style={{ objectFit: "cover" }}
              />

              {/* Overlay */}
              <div className="overlay" />

              {/* Content */}
              <div className="content">
                <h1>{s.title}</h1>
                <p>{s.desc}</p>
                <a className="btn" href={s.btnLink}>
                  {s.btnText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .hero {
          width: 100%;
          height: 100vh;
        }

        .heroSwiper {
          width: 100%;
          height: 100%;
        }

        .slide {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.3);
          z-index: 1;
        }

        /* LEFT-ALIGNED CONTENT */
        .content {
          position: absolute;
          z-index: 2;
          left: 50px;
          top: 240px;
          max-width: 700px;
          color: #111;
          font-family: "Poppins", sans-serif;
          text-align: left;
        }

        .content h1 {
          font-size: 72px;
          line-height: 82px;
          font-weight: 700;
          margin: 0 0 18px;
        }

        .content p {
          font-size: 20px;
          line-height: 28px;
          font-weight: 500;
          margin: 0 0 24px;
        }

        .btn {
          display: inline-block;
          padding: 12px 18px;
          border: 1px solid #111;
          color: #111;
          text-decoration: none;
          font-weight: 600;
          letter-spacing: 1px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .content {
            left: 20px;
            top: 180px;
            max-width: 90%;
            text-align: left;
          }

          .content h1 {
            font-size: 42px;
            line-height: 50px;
          }

          .content p {
            font-size: 16px;
            line-height: 24px;
          }
        }
      `}</style>
    </section>
  );
}

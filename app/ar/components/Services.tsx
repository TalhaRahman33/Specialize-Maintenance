"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    img: "/images/plumbing.webp",
    title: "أعمال السباكة",
    desc:
      "تركيب وصيانة شبكات السباكة والخزانات وإصلاح التسريبات باحترافية وجودة مضمونة.",
  },
  {
    id: 2,
    img: "/images/painting.webp",
    title: "دهانات الجدران والأسقف",
    desc:
      "دهانات عالية الجودة للجدران والأسقف بلمسة نهائية أنيقة وحماية تدوم طويلاً.",
  },
  {
    id: 3,
    img: "/images/electrician.avif",
    title: "أعمال الكهرباء",
    desc:
      "تنفيذ تمديدات كهربائية آمنة، صيانة، إصلاح الأعطال، وتركيب الأنظمة باحتراف.",
  },
  {
    id: 4,
    img: "/images/floor.avif",
    title: "تركيب الأرضيات",
    desc:
      "تركيب بلاط وأرضيات بدقة عالية مع تسوية مثالية وتشطيب راقٍ للمنازل والمشاريع.",
  },
  {
    id: 5,
    img: "/images/gypsum.avif",
    title: "جبس بورد",
    desc:
      "تنفيذ أسقف وجدران جبس بورد بتصاميم حديثة وتشطيب ناعم يناسب جميع المساحات.",
  },
  {
    id: 6,
    img: "/images/interiorD.avif",
    title: "التصميم الداخلي",
    desc:
      "حلول تصميم داخلي متكاملة تشمل الألوان والخامات والتوزيع بما يلائم ذوقك.",
  },
  {
    id: 7,
    img: "/images/Layout.jpg",
    title: "تخطيط المساحات",
    desc:
      "تصميم مخططات ثنائية وثلاثية الأبعاد لتحسين استغلال المساحة والوظائف.",
  },
  {
    id: 8,
    img: "/images/CCTV.webp",
    title: "تركيب كاميرات مراقبة",
    desc:
      "تركيب أنظمة CCTV مع توزيع احترافي، توصيلات آمنة، وإعداد كامل للتشغيل.",
  },
  {
    id: 9,
    img: "/images/welding.webp",
    title: "أعمال اللحام",
    desc:
      "خدمات لحام احترافية للأبواب، الهياكل المعدنية، والتصنيع بجودة عالية.",
  },
];

export default function ServicesSliderAr() {
  const router = useRouter();
  const goServices = () => router.push("/ar/services");

  return (
    <div dir="rtl">
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          {/* HEADER */}
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{ backgroundImage: "url(/images/bg-6.png)" }}
          >
            <div className="container">
              <div className="section-head text-white text-right">
                <div className="mt-separator-outer separator-right">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">
                        خدماتنا
                      </span>
                    </h2>
                  </div>
                </div>
                <h3>جودة مضمونة للمشاريع السكنية والتجارية.</h3>
              </div>
            </div>
          </div>

          {/* SLIDER */}
          <div className="services-half-bottom">
            <div className="container">
              <Swiper
                modules={[Autoplay]}
                loop
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3200, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
              >
                {services.map((s) => (
                  <SwiperSlide key={s.id}>
                    <div
                      className="service-card"
                      role="button"
                      tabIndex={0}
                      onClick={goServices}
                      onKeyDown={(e) => e.key === "Enter" && goServices()}
                    >
                      <div className="card-inner bg-gray">
                        {/* IMAGE */}
                        <div className="card-media">
                          <img
                            src={s.img}
                            alt={s.title}
                            className="card-img"
                            loading="lazy"
                          />
                          <div className="media-overlay" />
                        </div>

                        {/* CONTENT */}
                        <div className="card-content">
                          <h4 className="title-clamp">{s.title}</h4>
                          <p className="desc-clamp">{s.desc}</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* STYLES */}
              <style jsx>{`
                .service-card {
                  height: 100%;
                  cursor: pointer;
                }

                .card-inner {
                  height: 100%;
                  border-radius: 10px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .service-card:hover .card-inner {
                  transform: translateY(-6px);
                  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
                }

                .card-media {
                  position: relative;
                  width: 100%;
                  height: 190px;
                  overflow: hidden;
                }

                .card-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transition: transform 0.35s ease;
                }

                .service-card:hover .card-img {
                  transform: scale(1.08);
                }

                .media-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.15),
                    rgba(0, 0, 0, 0.45)
                  );
                  opacity: 0.9;
                  transition: opacity 0.35s ease;
                }

                .card-content {
                  padding: 22px;
                  text-align: right;
                }

                .title-clamp {
                  -webkit-line-clamp: 2;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  margin-bottom: 12px;
                }

                .desc-clamp {
                  -webkit-line-clamp: 4;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.7;
                }
              `}</style>
            </div>
          </div>
        </div>

        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>الخدمات</strong>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type ServiceItem = {
  id: number;
  clientUrl?: string;
  img: string;
  title: string;
  desc: string;
};

const services: ServiceItem[] = [
  {
    id: 1,
    clientUrl: "",
    img: "/images/Plumbing.jpg",
    title: "أعمال السباكة",
    desc: "تركيب وإصلاح وصيانة خطوط السباكة والوصلات وخزانات المياه ومعالجة التسريبات باحترافية وجودة مضمونة.",
  },
  {
    id: 2,
    clientUrl: "",
    img: "/images/Painting.jpg",
    title: "دهانات الجدران والأسقف",
    desc: "دهانات للجدران والأسقف بمواد متينة تمنح تشطيبًا نظيفًا وحماية أفضل ولونًا يدوم طويلاً.",
  },
  {
    id: 3,
    clientUrl: "",
    img: "/images/Electrician.jpg",
    title: "أعمال الكهرباء",
    desc: "تمديدات وتركيبات كهربائية آمنة، كشف الأعطال، ترقيات وإصلاحات على يد فنيين مهرة مع ضمان.",
  },
  {
    id: 4,
    clientUrl: "",
    img: "/images/tiling.jpg",
    title: "تركيب بلاط الأرضيات",
    desc: "تركيب بلاط للأرضيات بدقة مع تسوية نظيفة وتثبيت قوي وتشطيب فاخر للمنازل والمواقع التجارية.",
  },
  {
    id: 5,
    clientUrl: "",
    img: "/images/GypsumBoard.jpg",
    title: "جبس بورد",
    desc: "تركيب جبس بورد للأسقف والجدران بفواصل مرتبة وتشطيب ناعم وخيارات تصميم تناسب الديكورات الحديثة.",
  },
  {
    id: 6,
    clientUrl: "",
    img: "/images/interiordesigning.jpg",
    title: "التصميم الداخلي",
    desc: "حلول تصميم داخلي متكاملة تشمل الفكرة والخامات والألوان وتوزيع المساحات بما يناسب ذوقك واحتياجك.",
  },
  {
    id: 7,
    clientUrl: "",
    img: "/images/Actechnician.jpg",
    title: "فني تكييف",
    desc: "تركيب وصيانة وإصلاح أجهزة التكييف لضمان أفضل أداء تبريد بكفاءة عالية.",
  },
  {
    id: 8,
    clientUrl: "",
    img: "/images/cctv.jpg",
    title: "تركيب كاميرات مراقبة",
    desc: "تركيب CCTV مع توزيع احترافي للكاميرات وتمديدات وأسلاك وتركيب NVR/DVR وضبط إعدادات آمنة لمراقبة موثوقة.",
  },
  {
    id: 9,
    clientUrl: "",
    img: "/images/Welding.jpg",
    title: "خدمات اللحام",
    desc: "لحام احترافي للأبواب والسياجات والهياكل والأعمال المعدنية مع وصلات قوية وتشطيب نظيف.",
  },
  {
    id: 10,
    clientUrl: "https://spacializes.com/",
    img: "/images/Electrician.jpg",
    title: "أنر عالمك",
    desc: "حلول إضاءة شاملة تشمل التصميم والتركيب والصيانة للمساحات السكنية والتجارية.",
  },
];

export default function ServicesSliderAr() {
  const router = useRouter();

  const goServices = (clientUrl?: string) => {
    if (clientUrl) {
      window.open(clientUrl, "_blank");
    } else {
      router.push("/ar/services");
    }
  };

  return (
    <div className="services-slider-wrapper" dir="rtl">
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{
              backgroundImage: "url(/images/bg-6.png)",
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            }}
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

                <h3
                  style={{
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: "1.3rem",
                  }}
                >
                  جودة مضمونة للمشاريع السكنية والتجارية.
                </h3>
              </div>
            </div>
          </div>

          <div className="services-half-bottom">
            <div className="container">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3200, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 3 }, // ✅ SAME AS ENGLISH (NOT 4)
                }}
              >
                {services.map((s) => (
                  <SwiperSlide key={s.id}>
                    <div
                      className="mt-icon-box-wraper m-b30 service-card"
                      role="button"
                      tabIndex={0}
                      onClick={() => goServices(s.clientUrl)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && goServices(s.clientUrl)
                      }
                    >
                      <div className="card-inner">
                        <div className="card-glow"></div>

                        <div className="card-media">
                          <img
                            src={s.img}
                            alt={s.title}
                            className="card-img"
                            loading="lazy"
                          />
                          <div className="card-gradient"></div>

                          <div className="media-panel">
                            <div className="media-text">
                              <div className="title-wrapper">
                                <div className="icon-badge" aria-hidden="true">
                                  <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                </div>
                                <h4 className="media-title">{s.title}</h4>
                              </div>
                              <p className="media-desc">{s.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <style jsx>{`
                .service-card {
                  height: 100%;
                  cursor: pointer;
                  padding: 8px;
                }

                .card-inner {
                  height: 100%;
                  border-radius: 20px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  position: relative;
                  background: #fff;
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                }

                .card-glow {
                  position: absolute;
                  top: -50%;
                  left: -50%;
                  width: 200%;
                  height: 200%;
                  background: radial-gradient(
                    circle,
                    rgba(255, 107, 53, 0.15) 0%,
                    transparent 70%
                  );
                  opacity: 0;
                  transition: opacity 0.4s ease;
                  pointer-events: none;
                  z-index: 1;
                }

                .service-card:hover .card-inner {
                  transform: translateY(-12px) scale(1.02);
                  box-shadow: 0 25px 50px rgba(255, 107, 53, 0.25);
                }

                .service-card:hover .card-glow {
                  opacity: 1;
                }

                .card-media {
                  position: relative;
                  width: 100%;
                  height: 450px;
                  overflow: hidden;
                  border-radius: 16px;
                }

                .card-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transform: scale(1);
                  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                  display: block;
                }

                .card-gradient {
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: linear-gradient(
                    180deg,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(0, 0, 0, 0.3) 50%,
                    rgba(0, 0, 0, 0.85) 100%
                  );
                  opacity: 0.7;
                  transition: opacity 0.4s ease;
                }

                .service-card:hover .card-img {
                  transform: scale(1.15);
                }

                .service-card:hover .card-gradient {
                  opacity: 0.95;
                }

                .media-panel {
                  position: absolute;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  color: #fff;
                  display: flex;
                  align-items: flex-end;
                  justify-content: space-between;
                  padding: 24px 20px;
                  box-sizing: border-box;
                  height: 90px;
                  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  z-index: 2;
                  text-align: right;
                }

                .media-text {
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  overflow: hidden;
                  flex: 1;
                }

                .title-wrapper {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                }

                .icon-badge {
                  width: 32px;
                  height: 32px;
                  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                  border-radius: 8px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  flex-shrink: 0;
                  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.4);
                  transition: transform 0.3s ease;
                }

                .service-card:hover .icon-badge {
                  transform: rotate(360deg) scale(1.1);
                }

                .media-title {
                  margin: 0;
                  font-size: 20px;
                  font-weight: 700;
                  line-height: 1.2;
                  color: #ffffff;
                  text-shadow: 0 3px 8px rgba(0, 0, 0, 0.8);
                  letter-spacing: 0.3px;
                }

                .media-desc {
                  margin: 0;
                  font-size: 14px;
                  line-height: 1.6;
                  opacity: 0;
                  max-height: 0;
                  overflow: hidden;
                  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                  color: rgba(255, 255, 255, 0.95);
                  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
                }

                .panel-cta {
                  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                  color: #fff;
                  border: none;
                  width: 48px;
                  height: 48px;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 12px;
                  font-size: 20px;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
                  flex-shrink: 0;
                }

                .panel-cta:hover {
                  transform: translateX(4px);
                  box-shadow: 0 6px 20px rgba(255, 107, 53, 0.6);
                }

                .service-card:hover .media-panel {
                  height: 180px;
                  align-items: flex-start;
                }

                .service-card:hover .media-desc {
                  opacity: 1;
                  max-height: 200px;
                }

                :global(.services-slider-wrapper .swiper-pagination-bullet) {
                  width: 12px;
                  height: 12px;
                  background: #ddd;
                  opacity: 0.5;
                  transition: all 0.3s ease;
                }

                :global(.services-slider-wrapper .swiper-pagination-bullet-active) {
                  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                  opacity: 1;
                  width: 32px;
                  border-radius: 6px;
                }

                @media (max-width: 768px) {
                  .card-media {
                    height: 380px;
                  }

                  .media-title {
                    font-size: 18px;
                  }
                }
              `}</style>

              <style jsx global>{`
                .services-slider-wrapper .swiper-button-next,
                .services-slider-wrapper .swiper-button-prev {
                  display: none;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

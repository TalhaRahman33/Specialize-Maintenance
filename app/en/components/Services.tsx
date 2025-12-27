"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    clientUrl: "https://portal.maarif.sa/",
    img: "/images/plumbing.webp",
    title: "Plumbing",
    desc: "Installation, repair, and maintenance of plumbing lines, fittings, water tanks, and leak fixing with guaranteed workmanship.",
  },
  {
    id: 2,
    clientUrl: "https://www.iks.edu.sa/",
    img: "/images/painting.webp",
    title: "Wall & Roof Painting",
    desc: "Premium wall and roof painting using durable coatings for a clean finish, better protection, and long-lasting color.",
  },
  {
    id: 3,
    clientUrl: "https://daffah.sa/",
    img: "/images/electrician.avif",
    title: "Electrician",
    desc: "Safe electrical wiring, installations, troubleshooting, upgrades, and repairs handled by skilled technicians with guarantee.",
  },
  {
    id: 4,
    clientUrl: "https://menu.broastalfarooj.com/",
    img: "/images/floor.avif",
    title: "Floor Tiling",
    desc: "Accurate floor tiling installation with clean leveling, strong bonding, and premium finishing for homes and commercial sites.",
  },
  {
    id: 5,
    clientUrl: "",
    img: "/images/gypsum.avif",
    title: "Gypsum Board",
    desc: "Gypsum board ceiling and wall installation with neat joints, smooth finishing, and design options for modern interiors.",
  },
  {
    id: 6,
    clientUrl: "",
    img: "/images/interiorD.avif",
    title: "Interior Designing",
    desc: "Complete interior design solutions including concept, materials, colors, and layout to match your space and style.",
  },
  {
    id: 7,
    clientUrl: "",
    img: "/images/Layout.jpg",
    title: "Layout Planning",
    desc: "2D/3D layout planning to optimize space usage, flow, and functionality for renovations and new interior work.",
  },
  {
    id: 8,
    clientUrl: "",
    img: "/images/CCTV.webp",
    title: "CCTV Camera Installation",
    desc: "CCTV installation with proper camera placement, wiring, NVR/DVR setup, and secure configuration for reliable monitoring.",
  },
  {
    id: 9,
    clientUrl: "",
    img: "/images/welding.webp",
    title: "Welding Services",
    desc: "Professional welding for gates, grills, frames, and metal fabrication with strong joints and clean finishing.",
  },
];

export default function ServicesSlider() {
  const router = useRouter();
  const goServices = () => router.push("/en/services");

  return (
    <div>
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
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">Our</span>{" "}
                      Services
                    </h2>
                  </div>
                </div>
                <h3 style={{ 
                  background: 'linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: 600,
                  fontSize: '1.3rem'
                }}>
                  Guaranteed workmanship for residential and commercial projects.
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
                  1200: { slidesPerView: 3 },
                }}
              >
                {services.map((s) => (
                  <SwiperSlide key={s.id}>
                    <div
                      className="mt-icon-box-wraper m-b30 service-card"
                      role="button"
                      tabIndex={0}
                      onClick={goServices}
                      onKeyDown={(e) => e.key === "Enter" && goServices()}
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
                                <div className="icon-badge">
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                                  </svg>
                                </div>
                                <h4 className="media-title">{s.title}</h4>
                              </div>
                              <p className="media-desc">{s.desc}</p>
                            </div>
                            <button className="panel-cta">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </button>
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
                  background: radial-gradient(circle, rgba(255, 107, 53, 0.15) 0%, transparent 70%);
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
                  background: linear-gradient(180deg, 
                    rgba(0,0,0,0) 0%, 
                    rgba(0,0,0,0.3) 50%,
                    rgba(0,0,0,0.85) 100%
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
                  text-shadow: 0 3px 8px rgba(0,0,0,0.8);
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
                  text-shadow: 0 2px 4px rgba(0,0,0,0.6);
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

                /* Beautiful Navigation Arrows */
                :global(.swiper-button-next),
                :global(.swiper-button-prev) {
                  width: 56px;
                  height: 56px;
                  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: #fff;
                  top: 50%;
                  z-index: 20;
                  box-shadow: 0 8px 24px rgba(255, 107, 53, 0.35);
                  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  border: 3px solid rgba(255, 255, 255, 0.2);
                }

                :global(.swiper-button-next::after),
                :global(.swiper-button-prev::after) {
                  font-size: 22px;
                  font-weight: 900;
                  color: white;
                }

                :global(.swiper-button-next:hover),
                :global(.swiper-button-prev:hover) {
                  background: linear-gradient(135deg, #ff8c42 0%, #ffa500 100%);
                  transform: scale(1.15);
                  box-shadow: 0 12px 32px rgba(255, 107, 53, 0.5);
                }

                :global(.swiper-button-prev) { left: 20px; }
                :global(.swiper-button-next) { right: 20px; }

                /* Beautiful Pagination Dots */
                :global(.swiper-pagination-bullet) {
                  width: 12px;
                  height: 12px;
                  background: #ddd;
                  opacity: 0.5;
                  transition: all 0.3s ease;
                }

                :global(.swiper-pagination-bullet-active) {
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

                  :global(.swiper-button-next),
                  :global(.swiper-button-prev) {
                    width: 44px;
                    height: 44px;
                  }

                  :global(.swiper-button-next::after),
                  :global(.swiper-button-prev::after) {
                    font-size: 18px;
                  }
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
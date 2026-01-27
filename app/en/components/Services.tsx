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
    clientUrl: "",
    img: "/images/Plumbing.jpg",
    title: "Plumbing",
    desc: "Installation, repair, and maintenance of plumbing lines, fittings, water tanks, and leak fixing with guaranteed workmanship.",
  },
  {
    id: 2,
    clientUrl: "",
    img: "/images/Painting.jpg",
    title: "Wall & Roof Painting",
    desc: "Premium wall and roof painting using durable coatings for a clean finish, better protection, and long-lasting color.",
  },
  {
    id: 3,
    clientUrl: "",
    img: "/images/Electrician.jpg",
    title: "Electrician",
    desc: "Safe electrical wiring, installations, troubleshooting, upgrades, and repairs handled by skilled technicians with guarantee.",
  },
  {
    id: 4,
    clientUrl: "",
    img: "/images/tiling.jpg",
    title: "Floor Tiling",
    desc: "Accurate floor tiling installation with clean leveling, strong bonding, and premium finishing for homes and commercial sites.",
  },
  {
    id: 5,
    clientUrl: "",
    img: "/images/GypsumBoard.jpg",
    title: "Gypsum Board",
    desc: "Gypsum board ceiling and wall installation with neat joints, smooth finishing, and design options for modern interiors.",
  },
  {
    id: 6,
    clientUrl: "",
    img: "/images/interiordesigning.jpg",
    title: "Interior Designing",
    desc: "Complete interior design solutions including concept, materials, colors, and layout to match your space and style.",
  },
  {
    id: 7,
    clientUrl: "",
    img: "/images/Actechnician.jpg",
    title: "AC Technician",
    desc: "Professional air conditioning installation, maintenance, and repair services to ensure optimal cooling performance.",
  },
  {
    id: 8,
    clientUrl: "",
    img: "/images/cctv.jpg",
    title: "CCTV Camera Installation",
    desc: "CCTV installation with proper camera placement, wiring, NVR/DVR setup, and secure configuration for reliable monitoring.",
  },
  {
    id: 9,
    clientUrl: "",
    img: "/images/Welding.jpg",
    title: "Welding Services",
    desc: "Professional welding for gates, grills, frames, and metal fabrication with strong joints and clean finishing.",
  },
  {
    id: 10,
    clientUrl: "https://spacializes.com/",
    img: "/images/Electrician.jpg",
    title: "Light up Your World",
    desc: "Comprehensive lighting solutions including design, installation, and maintenance for residential and commercial spaces.",
  },
];

export default function ServicesSlider() {
  const router = useRouter();
  const goServices = (clientUrl?: string) => {
    if (clientUrl) {
      window.open(clientUrl, "_blank");
    } else {
      router.push("/en/services");
    }
  };

  return (
    <div className="services-slider-wrapper">
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
                  color: '#fff',
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
                      onClick={() => goServices(s.clientUrl)}
                      onKeyDown={(e) => e.key === "Enter" && goServices(s.clientUrl)}
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

                /* Beautiful Pagination Dots */
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

              {/* Scoped Navigation Arrows - Only for this slider */}
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
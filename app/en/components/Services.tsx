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
    clientUrl: "https://portal.maarif.sa/",
    img: "/images/plumbing.webp",
    title: "Plumbing",
    desc:
      "Installation, repair, and maintenance of plumbing lines, fittings, water tanks, and leak fixing with guaranteed workmanship.",
  },
  {
    id: 2,
    clientUrl: "https://www.iks.edu.sa/",
    img: "/images/painting.webp",
    title: "Wall & Roof Painting",
    desc:
      "Premium wall and roof painting using durable coatings for a clean finish, better protection, and long-lasting color.",
  },
  {
    id: 3,
    clientUrl: "https://daffah.sa/",
    img: "/images/electrician.avif",
    title: "Electrician",
    desc:
      "Safe electrical wiring, installations, troubleshooting, upgrades, and repairs handled by skilled technicians with guarantee.",
  },
  {
    id: 4,
    clientUrl: "https://menu.broastalfarooj.com/",
    img: "/images/floor.avif",
    title: "Floor Tiling",
    desc:
      "Accurate floor tiling installation with clean leveling, strong bonding, and premium finishing for homes and commercial sites.",
  },
  {
    id: 5,
    clientUrl: "",
    img: "/images/gypsum.avif",
    title: "Gypsum Board",
    desc:
      "Gypsum board ceiling and wall installation with neat joints, smooth finishing, and design options for modern interiors.",
  },
  {
    id: 6,
    clientUrl: "",
    img: "/images/interiorD.avif",
    title: "Interior Designing",
    desc:
      "Complete interior design solutions including concept, materials, colors, and layout to match your space and style.",
  },
  {
    id: 7,
    clientUrl: "",
    img: "/images/Layout.jpg",
    title: "Layout Planning",
    desc:
      "2D/3D layout planning to optimize space usage, flow, and functionality for renovations and new interior work.",
  },
  {
    id: 8,
    clientUrl: "",
    img: "/images/CCTV.webp",
    title: "CCTV Camera Installation",
    desc:
      "CCTV installation with proper camera placement, wiring, NVR/DVR setup, and secure configuration for reliable monitoring.",
  },
  {
    id: 9,
    clientUrl: "",
    img: "/images/welding.webp",
    title: "Welding Services",
    desc:
      "Professional welding for gates, grills, frames, and metal fabrication with strong joints and clean finishing.",
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
            style={{ backgroundImage: "url(/images/bg-6.png)" }}
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
                <h3>Guaranteed workmanship for residential and commercial projects.</h3>
              </div>
            </div>
          </div>

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
                      className="mt-icon-box-wraper m-b30 service-card"
                      role="button"
                      tabIndex={0}
                      onClick={goServices}
                      onKeyDown={(e) => e.key === "Enter" && goServices()}
                    >
                      <div className="card-inner bg-gray">
                        {/* TOP IMAGE (FULL WIDTH) */}
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
                          <h4 className="mt-tilte title-clamp">{s.title}</h4>
                          <p className="desc-clamp">{s.desc}</p>
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
                }

                .card-inner {
                  height: 100%;
                  border-radius: 10px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                /* Hover card lift */
                .service-card:hover .card-inner {
                  transform: translateY(-6px);
                  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
                }

                .card-media {
                  position: relative;
                  width: 100%;
                  height: 190px; /* adjust if you want bigger top image */
                  overflow: hidden;
                }

                .card-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transform: scale(1);
                  transition: transform 0.35s ease;
                  display: block;
                }

                /* Image zoom on hover */
                .service-card:hover .card-img {
                  transform: scale(1.08);
                }

                /* Dark overlay for better text vibe */
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
                  pointer-events: none;
                }

                .service-card:hover .media-overlay {
                  opacity: 1;
                }

                .card-content {
                  padding: 22px 22px 26px 22px;
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }

                .title-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.25;
                  min-height: 52px;
                  margin-bottom: 12px;
                }

                .desc-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.65;
                  opacity: 0.95;
                }
              `}</style>
            </div>
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Services</strong>
        </div>
      </div>
    </div>
  );
}

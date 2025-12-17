"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    number: "1",
    icon: "/images/crane-1.png",
    title: "Building \nConstruction",
    desc: "lorem Ipsum available, but the majority have suffered alteration in some form, by accident.",
  },
  {
    id: 2,
    number: "2",
    icon: "/images/renovation.png",
    title: "Building \nRenovation",
    desc: "lorem Ipsum available, but the majority have suffered alteration in some form, by accident.",
  },
  {
    id: 3,
    number: "3",
    icon: "/images/toolbox.png",
    title: "Building \nMaintenance",
    desc: "lorem Ipsum available, but the majority have suffered alteration in some form, by accident.",
  },
  {
    id: 4,
    number: "4",
    icon: "/images/compass.png",
    title: "Architecture \nDesign",
    desc: "lorem Ipsum available, but the majority have suffered alteration in some form, by accident.",
  },

  // ✅ Added 2 more
  {
    id: 5,
    number: "5",
    icon: "/images/helmet.png", // put icon in /public/images/helmet.png (or change path)
    title: "Project \nPlanning",
    desc: "Planning, scheduling, and on-site coordination to deliver projects on time and within budget.",
  },
  {
    id: 6,
    number: "6",
    icon: "/images/brickwall.png", // put icon in /public/images/brickwall.png (or change path)
    title: "Interior \nFinishing",
    desc: "High-quality finishing solutions including flooring, partitions, paint, and fit-out services.",
  },
];

export default function Services() {
  const router = useRouter();

  const goServices = () => router.push("/en/services");

  return (
    <div>
      {/* OUR SERVICES START */}
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{ backgroundImage: "url(/images/bg-6.png)" }}
          >
            <div className="container">
              {/* TITLE START */}
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">Our</span>{" "}
                      Services
                    </h2>
                  </div>
                </div>
                <h3>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration
                </h3>
              </div>
              {/* TITLE END */}
            </div>
          </div>

          <div className="services-half-bottom">
            <div className="container">
              <Swiper
                modules={[Autoplay]}
                loop
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                      className="mt-icon-box-wraper m-b30"
                      style={{ cursor: "pointer" }}
                      onClick={goServices} // ✅ card click
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && goServices()}
                    >
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50">
                        <span className="icon-count-number">{s.number}</span>

                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                          <span className="icon-cell">
                            {/* icon */}
                            <Image
                              src={s.icon}
                              alt={s.title.replace("\n", " ")}
                              width={54}
                              height={54}
                            />
                          </span>
                        </div>

                        <div className="icon-content">
                          <h4 className="mt-tilte m-b25" style={{ whiteSpace: "pre-line" }}>
                            {s.title}
                          </h4>
                          <p>{s.desc}</p>

                          {/* ✅ button click */}
                          <button
                            type="button"
                            className="site-button-link"
                            onClick={(e) => {
                              e.stopPropagation();
                              goServices();
                            }}
                          >
                            Read More <i className="fa fa-angle-right arrow-animation" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Services</strong>
        </div>
      </div>
      {/* OUR SERVICES END */}

      {/* Make the button look like your anchor link */}
      <style jsx>{`
        :global(.site-button-link) {
          background: transparent;
          border: 0;
          padding: 0;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

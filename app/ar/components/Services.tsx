"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    number: "1",
    icon: "/images/crane-1.png",
    title: "إنشاء\nالمباني",
    desc: "تتوفر نصوص عديدة، ولكن معظمها تعرض للتغيير أو التعديل بشكل ما، أحيانًا بشكل غير مقصود.",
  },
  {
    id: 2,
    number: "2",
    icon: "/images/renovation.png",
    title: "ترميم\nالمباني",
    desc: "تتوفر نصوص عديدة، ولكن معظمها تعرض للتغيير أو التعديل بشكل ما، أحيانًا بشكل غير مقصود.",
  },
  {
    id: 3,
    number: "3",
    icon: "/images/toolbox.png",
    title: "صيانة\nالمباني",
    desc: "تتوفر نصوص عديدة، ولكن معظمها تعرض للتغيير أو التعديل بشكل ما، أحيانًا بشكل غير مقصود.",
  },
  {
    id: 4,
    number: "4",
    icon: "/images/compass.png",
    title: "تصميم\nمعماري",
    desc: "تتوفر نصوص عديدة، ولكن معظمها تعرض للتغيير أو التعديل بشكل ما، أحيانًا بشكل غير مقصود.",
  },
  // ✅ add 2 more if you want
  {
    id: 5,
    number: "5",
    icon: "/images/helmet.png", // add icon in /public/images/
    title: "تخطيط\nالمشاريع",
    desc: "إدارة التخطيط والجدولة والتنسيق لضمان تسليم المشروع في الوقت المحدد وبأعلى جودة.",
  },
  {
    id: 6,
    number: "6",
    icon: "/images/brickwall.png", // add icon in /public/images/
    title: "تشطيب\nداخلي",
    desc: "حلول تشطيب متكاملة تشمل الدهانات والأرضيات والتقسيمات وتجهيزات الموقع.",
  },
];

export default function Services() {
  const router = useRouter();
  const goServices = () => router.push("/ar/services"); // change to /en/services if needed

  return (
    <div dir="rtl">
      {/* OUR SERVICES START */}
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{ backgroundImage: "url(/images/bg-6.png)" }} // ✅ fixed
          >
            <div className="container">
              <div className="section-head text-white text-right">
                <div className="mt-separator-outer separator-right">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">خدماتنا</span>
                    </h2>
                  </div>
                </div>
                <h3>
                  تتوفر العديد من الصيغ المختلفة، ولكن الغالبية تعرضت للتعديل أو التغيير.
                </h3>
              </div>
            </div>
          </div>

          <div className="services-half-bottom">
            <div className="container">
              <Swiper
                modules={[Autoplay]}
                loop
             
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={20}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  576: { slidesPerView: 2 },
                  992: { slidesPerView: 3 },
                  1200: { slidesPerView: 4 },
                }}
                className="servicesSwiper"
              >
                {services.map((s) => (
                  <SwiperSlide key={s.id}>
                    {/* ✅ card click */}
                    <div
                      className="mt-icon-box-wraper m-b30"
                      style={{ cursor: "pointer" }}
                      onClick={goServices}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && goServices()}
                    >
                      <div className="relative icon-count-2 bg-gray p-a30 p-tb50 text-right">
                        <span className="icon-count-number">{s.number}</span>

                        <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                          <span className="icon-cell">
                            <Image src={s.icon} alt={s.title} width={54} height={54} />
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
                            data-hover="اقرأ المزيد"
                            onClick={(e) => {
                              e.stopPropagation();
                              goServices();
                            }}
                          >
                            اقرأ المزيد <i className="fa fa-angle-left arrow-animation" />
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

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>الخدمات</strong>
        </div>

        {/* make button same style as anchor */}
        <style jsx>{`
          :global(.site-button-link) {
            background: transparent;
            border: 0;
            padding: 0;
            cursor: pointer;
          }
          :global(.servicesSwiper) {
            padding-bottom: 40px;
          }
        `}</style>
      </div>
      {/* OUR SERVICES END */}
    </div>
  );
}

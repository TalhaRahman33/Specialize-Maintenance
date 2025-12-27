"use client";

import React from "react";
import Link from "next/link";

const ProjectsAr = () => {
  return (
    <div dir="rtl">
      {/* OUR PROJECT START */}
      <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head text-right">
            <div className="mt-separator-outer separator-right">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one">
                  <span className="font-weight-300 site-text-primary">
                    مشاريعنا
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="portfolio-wrap row clearfix">
              {/* 1 */}
              <ProjectCardAr
                img="/images/pic1_3.jpg"
                title="أثاث الكراسي"
                location="مسقط، سلطنة عُمان"
              />

              {/* 2 */}
              <ProjectCardAr
                img="/images/pic2_2.jpg"
                title="أثاث"
                location="المنزل الشمالي"
              />

              {/* 3 */}
              <ProjectCardAr
                img="/images/pic3_3.jpg"
                title="غرفة المعيشة"
                location="العقبة، الأردن"
              />

              {/* 4 */}
              <ProjectCardAr
                img="/images/pic4_1.jpg"
                title="مساحة عمل مثالية"
                location="بيرث، أستراليا"
              />

              {/* 5 */}
              <ProjectCardAr
                img="/images/pic5_1.jpg"
                title="ديكور"
                location="العقبة، الأردن"
              />

              {/* 6 */}
              <ProjectCardAr
                img="/images/pic6.jpg"
                title="ديكور عصري"
                location="مسقط، سلطنة عُمان"
              />

              {/* 7 */}
              <ProjectCardAr
                img="/images/pic7.jpg"
                title="حمّام"
                location="المنزل الشمالي"
              />

              {/* 8 */}
              <ProjectCardAr
                img="/images/pic1_3.jpg"
                title="بناء منزل"
                location="سلطنة عُمان"
              />
            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        {/* <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>المشاريع</strong>
        </div> */}
      </div>
      {/* OUR PROJECT END */}
    </div>
  );
};

export default ProjectsAr;

/* -------------------------------- */
/* 🔹 Reusable Project Card (AR) */
/* -------------------------------- */

type CardProps = {
  img: string;
  title: string;
  location: string;
};

const ProjectCardAr = ({ img, title, location }: CardProps) => {
  return (
    <div className="col-lg-3 col-md-6 m-b30">
      <div className="mt-box image-hover-block position-relative">
        <div className="mt-thum-bx">
          <img src={img} alt={title} />
        </div>

        <div className="mt-info p-t20 text-white text-right">
          <h4 className="mt-tilte m-b10 m-t0">{title}</h4>
          <p className="m-b0">{location}</p>
        </div>

        {/* ✅ Next.js Link overlay */}
        <Link
          href="/ar/portfolio"
          className="project-link-overlay"
          aria-label="فتح صفحة الأعمال"
        />
      </div>

      <style jsx>{`
        .project-link-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};

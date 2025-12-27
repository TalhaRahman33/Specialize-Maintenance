"use client";

import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div>
      {/* OUR PROJECT START */}
      <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-left">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one">
                  <span className="font-weight-300 site-text-primary">Our</span>{" "}
                  Projects
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="portfolio-wrap row clearfix">
              {/* 1 */}
              <ProjectCard
                img="/images/pic1_3.jpg"
                title="Chair Furniture"
                location="Muscat, Sultanate of Oman"
              />

              {/* 2 */}
              <ProjectCard
                img="/images/pic2_2.jpg"
                title="Furniture"
                location="North House"
              />

              {/* 3 */}
              <ProjectCard
                img="/images/pic3_3.jpg"
                title="Living Room"
                location="Aqaba, Jordan"
              />

              {/* 4 */}
              <ProjectCard
                img="/images/pic4_1.jpg"
                title="Dream Workspace"
                location="Perth, Australia"
              />

              {/* 5 */}
              <ProjectCard
                img="/images/pic5_1.jpg"
                title="Decore"
                location="Aqaba, Jordan"
              />

              {/* 6 */}
              <ProjectCard
                img="/images/pic6.jpg"
                title="Modern Decoration"
                location="Muscat, Sultanate of Oman"
              />

              {/* 7 */}
              <ProjectCard
                img="/images/pic7.jpg"
                title="Bathroom"
                location="North House"
              />

              {/* 8 */}
              <ProjectCard
                img="/images/pic1_3.jpg"
                title="Building House"
                location="Sultanate of Oman"
              />
            </div>
          </div>
        </div>

        {/* <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Projects</strong>
        </div> */}
      </div>
      {/* OUR PROJECT END */}
    </div>
  );
};

export default Projects;

/* -------------------------------- */
/* 🔹 Reusable Project Card */
/* -------------------------------- */

type CardProps = {
  img: string;
  title: string;
  location: string;
};

const ProjectCard = ({ img, title, location }: CardProps) => {
  return (
    <div className="col-lg-3 col-md-6 m-b30">
      <div className="mt-box image-hover-block position-relative" style={{ zIndex: 3 }}>
        <div className="mt-thum-bx">
          <img src={img} alt={title} />
        </div>

        <div className="mt-info p-t20 text-white">
          <h4 className="mt-tilte m-b10 m-t0">{title}</h4>
          <p className="m-b0">{location}</p>
        </div>

        {/* ✅ Next.js Link overlay */}
        <Link
          href="/en/portfolio"
          className="project-link-overlay"
          aria-label="Open portfolio"
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

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Spacialization = () => {
  return (
    <>
      {/* OUR SPECIALIZATION START */}
      <div
        className="section-full mobile-page-padding our-speci_wrap bg-white p-t80 p-b30 bg-repeat square_shape1"
        style={{ backgroundImage: "url(/images/bg-5.png)" }} // ✅ public path
      >
        <div className="container">
          <div className="section-content">
            <div className="row">
              {/* CARD 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  {/* Keep same look: use img-like box with fixed height */}
                  <div className="spec-img">
                    <Image
                      src="/images/pic1.avif"
                      alt="cctv"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="figcaption">
                    <h4>CCTV camera installation</h4>
                    <p>
                      Installing and setting up CCTV systems for enhanced
                      security and surveillance.
                    </p>

                    <Link href="/en/services" aria-label="View CCTV services">
                      <i className="link-plus site-bg-primary" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <div className="spec-img">
                    <Image
                      src="/images/pic2.avif"
                      alt="construction"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="figcaption">
                    <h4>Construction</h4>
                    <p>
                      Bringing your construction dreams to life with precision
                      and expertise.
                    </p>

                    <Link
                      href="/en/services"
                      aria-label="View Construction services"
                    >
                      <i className="link-plus site-bg-primary" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <div className="spec-img">
                    <Image
                      src="/images/pic3.avif"
                      alt="welding"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  <div className="figcaption site-bg-dark">
                    <h4>Welding</h4>
                    <p>
                      Creating strong, durable structures with precision and
                      expertise.
                    </p>

                    <Link href="/en/services" aria-label="View Welding services">
                      <i className="link-plus site-bg-primary" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* CONTENT BOX */}
              <div className="col-xl-3 col-lg-12 col-md-6 m-b30">
                <div className="mt-box our-speciallization-content">
                  <h3 className="m-t0">
                    <span className="font-weight-100">Building</span> <br />
                    It better in concrete.
                  </h3>
                  <p>
                    At our firm, we don’t just build houses; we create homes. Our
                    dedication to quality and innovation ensures your vision
                    becomes a reality.
                  </p>

                  <Link href="/en/services" className="site-button btn-effect">
                    View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>SPECIALIZATION</strong>
        </div>

        {/* ✅ Keep design same: match classic theme image height (don’t shrink) */}
        <style jsx>{`
          .spec-img {
            position: relative;
            width: 100%;
            height: 410px; /* ✅ bigger so it matches your old <img> look */
            overflow: hidden;
          }

          /* On medium screens keep it strong */
          @media (max-width: 1200px) {
            .spec-img {
              height: 340px;
            }
          }

          /* Mobile: still tall enough, not compressed */
          @media (max-width: 768px) {
            .spec-img {
              height: 300px;
            }
          }
        `}</style>
      </div>
      {/* OUR SPECIALIZATION END */}
    </>
  );
};

export default Spacialization;

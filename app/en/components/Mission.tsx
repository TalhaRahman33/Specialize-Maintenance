"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Mission() {
  const router = useRouter();

  return (
    <div>
      {/* OUR MISSION START */}
      <div
        className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
        style={{
          // ✅ Next.js: always use leading /
          backgroundImage: "url(/images/left-men.png), url(/images/bg-4.png)",
        }}
      >
        <div className="section-content">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one ">
                    <span className="font-weight-300 site-text-primary">Our</span>{" "}
                    Mission
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}

            <div className="row">
              {/* LEFT */}
              <div className="col-lg-4 col-md-6">
                <div
                  className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left"
                  style={{ backgroundImage: "url(/images/bg-site.png)" }}
                >
                  <h3 className="m-t0">
                    <span className="font-weight-100"> Site Areas</span>
                    <br /> what we serve
                  </h3>

                  <p>
                    lorem Ipsum available, but the majority have suffered alteration
                    in some form, by ious versi ons have evolved over the years,
                    sometimes by accident
                  </p>

                  <ul className="list-angle-right anchor-line">
                    {/* ✅ internal routing */}
                    <li>
                      <a
                        href="/en/services"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/en/services");
                        }}
                      >
                        Construction Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="/en/services"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/en/services");
                        }}
                      >
                        Pre Construction Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/en/services"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/en/services");
                        }}
                      >
                        Contract Administration
                      </a>
                    </li>
                    <li>
                      <a
                        href="/en/services"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/en/services");
                        }}
                      >
                        Implementation
                      </a>
                    </li>
                    <li>
                      <a
                        href="/en/services"
                        onClick={(e) => {
                          e.preventDefault();
                          router.push("/en/services");
                        }}
                      >
                        Leed consultation
                      </a>
                    </li>
                  </ul>

                  <div className="text-right">
                    <a
                      href="/en/about"
                      className="site-button-link"
                      data-hover="Read More"
                      onClick={(e) => {
                        e.preventDefault();
                        router.push("/en/about");
                      }}
                    >
                      Read More <i className="fa fa-angle-right arrow-animation" />
                    </a>
                  </div>
                </div>
              </div>

              {/* MID IMAGE */}
              <div className="col-lg-4 col-md-6">
                <div className="mission-mid bg-no-repeat bg-cover m-b30 missionImageWrap">
                  <Image
                    src="/images/mission.jpg"
                    alt="Mission"
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                </div>
              </div>

              {/* RIGHT FORM */}
              <div className="col-lg-4 col-md-12">
                <div className="contact-home1-left site-bg-dark p-a30 m-b0">
                  <h3 className="text-white m-t0">
                    <span className="font-weight-100">Get In</span> Touch
                  </h3>

                  {/* Note: action=form-handler2.php won't work in Next.js unless you host PHP separately */}
                  <form
                    className="cons-contact-form2 form-transparent"
                    onSubmit={(e) => {
                      e.preventDefault();
                      // TODO: connect API route / contact service
                      alert("Submit handler not connected yet (Next.js).");
                    }}
                  >
                    <div className="input input-animate">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="username" id="name" />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="Phone">Phone</label>
                      <input type="text" name="phone" id="Phone" />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="message">Textarea</label>
                      <textarea name="message" id="message" />
                      <span className="spin" />
                    </div>

                    <div className="text-center p-t10">
                      <button type="submit" className="site-button btn-effect ">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Mission</strong>
        </div>

        <style jsx>{`
          .missionImageWrap {
            position: relative;
            width: 100%;
            height: 430px; /* match your design */
            overflow: hidden;
          }
          @media (max-width: 768px) {
            .missionImageWrap {
              height: 280px;
            }
          }
        `}</style>
      </div>
      {/* OUR MISSION END */}
    </div>
  );
}

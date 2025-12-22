"use client";

import React from "react";
import Image from "next/image";

const WHATSAPP_NUMBER = "966576150857";
const WHATSAPP_TEXT = "مرحبًا، أود الاستفسار عن خدماتكم.";

export default function Mission() {
  const goWhatsapp = (serviceTitle?: string) => {
    const serviceLine = serviceTitle ? `Service: ${serviceTitle}` : "Service Inquiry";
    const text = encodeURIComponent(`${WHATSAPP_TEXT}\n${serviceLine}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      {/* OUR MISSION START */}
      <div
        className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
        style={{
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
                    <span className="font-weight-100">Our Focus</span>
                    <br /> what we deliver
                  </h3>

                  <p>
                    We help homeowners and businesses complete projects with quality,
                    safety, and on-time delivery. From planning to execution, our team
                    works with clear communication, clean finishing, and reliable
                    workmanship—so you can trust the result from day one.
                  </p>

                  <ul className="list-angle-right anchor-line">
              
                    <li>
                      <button
                        type="button"
                        className="linkLike"
                        onClick={() => goWhatsapp("CCTV & Security Systems")}
                      >
                        CCTV & Security Systems
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="linkLike"
                        onClick={() => goWhatsapp("Electrical & Lighting")}
                      >
                        Electrical & Lighting
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="linkLike"
                        onClick={() => goWhatsapp("Plumbing & Maintenance")}
                      >
                        Plumbing & Maintenance
                      </button>
                    </li>
                
                  </ul>

                  {/* ✅ Replace Read More with Call to Us */}
                  <div className="text-right">
                    <button
                      type="button"
                      className="site-button-link"
                      data-hover="Call to Us"
                      onClick={() => goWhatsapp()}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      Call to Us <i className="fa fa-whatsapp arrow-animation" />
                    </button>
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

                  {/* ✅ form now opens WhatsApp instead of dummy submit */}
                  <form
                    className="cons-contact-form2 form-transparent"
                    onSubmit={(e) => {
                      e.preventDefault();

                      const name = (e.currentTarget.username as any)?.value || "";
                      const email = (e.currentTarget.email as any)?.value || "";
                      const phone = (e.currentTarget.phone as any)?.value || "";
                      const message = (e.currentTarget.message as any)?.value || "";

                      const text = encodeURIComponent(
                        `Hello! I want to inquire about your services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
                      );

                      window.open(
                        `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    <div className="input input-animate">
                      <label htmlFor="name">Name</label>
                      <input type="text" name="username" id="name" required />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" required />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="Phone">Phone</label>
                      <input type="text" name="phone" id="Phone" required />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      <label htmlFor="message">Message</label>
                      <textarea name="message" id="message" rows={3} required />
                      <span className="spin" />
                    </div>

                    <div className="text-center p-t10">
                      <button type="submit" className="site-button btn-effect ">
                        Send on WhatsApp
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
            height: 430px;
            overflow: hidden;
          }
          @media (max-width: 768px) {
            .missionImageWrap {
              height: 280px;
            }
          }

          /* ✅ make buttons look like anchor links (same UI) */
          .linkLike {
            background: transparent;
            border: none;
            padding: 0;
            cursor: pointer;
            color: inherit;
            text-align: left;
          }
          .linkLike:hover {
            text-decoration: underline;
          }
        `}</style>
      </div>
      {/* OUR MISSION END */}
    </div>
  );
}

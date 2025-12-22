"use client";

import React from "react";

const Callus = () => {
  return (
    <div dir="rtl">
      {/* CALL US SECTION START */}
      <div
        className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
        style={{ backgroundImage: "url(/images/bg-1.jpg)" }}
      >
        {/* Overlay */}
        <div className="overlay-main site-bg-primary opacity-07" />

        <div className="container">
          <div className="section-content">
            <div className="call-us-section text-center text-white">
              <h4 className="m-b15">لنعمل معًا</h4>

              {/* REAL PHONE NUMBER */}
              <h2 className="call-us-number m-b10">
                <a
                  href="tel:+966539771718"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  +966 539 771 718
                </a>
              </h2>

              {/* Professional subtitle instead of fake address */}
              <h4 className="call-us-address m-t0 m-b25">
                خدمات احترافية • استجابة سريعة • جودة موثوقة
              </h4>

              {/* CTA → WhatsApp */}
              <a
                href="https://wa.me/966539771718"
                target="_blank"
                rel="noreferrer"
                className="site-button-secondry btn-effect site-bg-dark"
              >
                تواصل معنا عبر واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* CALL US SECTION END */}
    </div>
  );
};

export default Callus;

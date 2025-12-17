import React from "react";

const Callus = () => {
  return (
    <div dir="rtl">
      {/* CALL US SECTION START */}
      <div
        className="section-full mobile-page-padding p-tb80 overlay-wraper bg-cover bg-center"
        style={{ backgroundImage: "url(images/bg-1.jpg)" }}
      >
        <div className="overlay-main site-bg-primary opacity-07" />
        <div className="container">
          <div className="section-content">
            <div className="call-us-section text-center">
              <h4 className="m-b15">لنعمل معًا</h4>

              <h2 className="call-us-number m-b15 m-b0">
                (+291)-456-789-1234
              </h2>

              <h4 className="call-us-address m-t0 m-b20">
                شارع 4، رقم 45 – مدينة نيويورك
              </h4>

              <a
                href="contact-1.html"
                className="site-button-secondry btn-effect site-bg-dark"
              >
                تواصل معنا
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

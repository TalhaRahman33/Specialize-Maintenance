import React from "react";

const OurValue = () => {
  return (
    <div>
      {/* OUR VALUE START */}
      <div className="section-full mobile-page-padding p-t80 p-b50 bg-white our-valu-wrap">
        <div className="container">
          <div className="section-content">
            <div className="row">
              {/* LEFT: TITLE + BUSINESS TEXT */}
              <div className="col-lg-4 col-md-12">
                <div className="section-head">
                  <div className="mt-separator-outer separator-left">
                    <div className="mt-separator">
                      <h2 className="text-uppercase sep-line-one">
                        <span className="font-weight-300 site-text-primary">
                          Our
                        </span>{" "}
                        Value
                      </h2>
                    </div>

                    <p>
                      We help businesses grow with reliable services, clear
                      communication, and results-driven execution. Whether you
                      need digital solutions, operational support, or
                      professional consulting — we deliver with consistency and
                      accountability.
                    </p>

                    <p className="m-b0">
                      Our focus is simple: <b>solve real problems</b>, improve
                      performance, and create long-term value for our clients.
                    </p>
                  </div>
                </div>

                {/* AUTHOR / COMPANY LEAD */}
               

                {/* QUICK HIGHLIGHTS */}
                <div className="p-t20">
                  <ul className="list-check-circle">
                    <li>Dedicated support & fast response</li>
                    <li>Transparent reporting & weekly updates</li>
                    <li>Tailored solutions for your industry</li>
                    <li>Quality assurance on every delivery</li>
                  </ul>
                </div>
              </div>

              {/* MID: KPI / STATS */}
              <div className="col-lg-3 col-md-6">
                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    120+
                  </div>
                  <h4 className="m-tb0">Business Clients</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    320+
                  </div>
                  <h4 className="m-tb0">Projects Delivered</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    98%
                  </div>
                  <h4 className="m-tb0">Client Satisfaction</h4>
                </div>
              </div>

              {/* RIGHT: BUSINESS CAPABILITIES (PROGRESS) */}
              <div className="col-lg-5 col-md-6">
                <div className="our-exp">
                  <div className="mt-box">
                    <h3 className="m-t0">
                      <span className="font-weight-100"> We support</span>
                      <span className="site-text-primary"> business growth</span>{" "}
                      through multi-service delivery
                    </h3>

                    <p className="m-b20">
                      From strategy to execution — our team handles planning,
                      implementation, optimization, and ongoing support.
                    </p>
                  </div>

                  <span className="progressText text-black">
                    <b>Business Consulting & Strategy</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "90%" }}
                      aria-valuenow={90}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>90%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>Plumbing</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "88%" }}
                      aria-valuenow={88}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>88%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>Electrician</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "82%" }}
                      aria-valuenow={82}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>82%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>CCTV Camera Installation</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "86%" }}
                      aria-valuenow={86}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>86%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>Welding</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "92%" }}
                      aria-valuenow={92}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>92%</span>
                    </div>
                  </div>

                </div>
              </div>
              {/* RIGHT END */}
            </div>
          </div>
        </div>
      </div>
      {/* OUR VALUE END */}
    </div>
  );
};

export default OurValue;

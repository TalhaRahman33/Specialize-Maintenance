import React from "react";

const OurValue = () => {
  return (
    <div dir="rtl">
      {/* OUR VALUE START */}
      <div className="section-full mobile-page-padding p-t80 p-b50 bg-white our-valu-wrap">
        <div className="container">
          <div className="section-content">
            <div className="row">

              {/* LEFT COLUMN */}
              <div className="col-lg-4 col-md-12">
                <div className="section-head text-right">
                  <div className="mt-separator-outer separator-right">
                    <div className="mt-separator">
                      <h2 className="text-uppercase sep-line-one">
                        <span className="font-weight-300 site-text-primary">
                          قيمتنا
                        </span>
                      </h2>
                    </div>

                    <p>
                      نساعد الشركات على النمو من خلال خدمات احترافية، تواصل واضح،
                      وتنفيذ يعتمد على النتائج. سواء كنت تحتاج حلول رقمية، دعم تشغيلي،
                      أو استشارات متخصصة — نحن ننجز العمل بجودة واستمرارية.
                    </p>

                    <p className="m-b0">
                      تركيزنا بسيط: <b>حل مشاكل حقيقية</b>، تحسين الأداء، وبناء قيمة
                      طويلة المدى لعملائنا.
                    </p>
                  </div>
                </div>

              

                {/* QUICK HIGHLIGHTS */}
                <div className="p-t20 text-right">
                  <ul className="list-check-circle">
                    <li>دعم سريع واستجابة واضحة</li>
                    <li>تقارير شفافة وتحديثات دورية</li>
                    <li>حلول مخصصة حسب نشاطك</li>
                    <li>مراجعة جودة قبل التسليم</li>
                  </ul>
                </div>
              </div>

              {/* COUNTERS */}
              <div className="col-lg-3 col-md-6">
                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    120+
                  </div>
                  <h4 className="m-tb0">شركات تعاملنا معها</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    320+
                  </div>
                  <h4 className="m-tb0">مشروع تم تسليمه</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    98%
                  </div>
                  <h4 className="m-tb0">رضا العملاء</h4>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-lg-5 col-md-6">
                <div className="our-exp text-right">
                  <div className="mt-box">
                    <h3 className="m-t0">
                      <span className="font-weight-100">ندعم</span>
                      <span className="site-text-primary"> نمو الأعمال</span>{" "}
                      عبر تنفيذ خدمات متعددة بشكل احترافي
                    </h3>

                    <p className="m-b20">
                      من التخطيط إلى التنفيذ — فريقنا يتولى الاستراتيجية، التطوير،
                      التحسين، والمتابعة المستمرة لضمان النتائج.
                    </p>
                  </div>

                  <span className="progressText text-black">
                    <b> الاستشارات والاستراتيجيات التجارية </b>
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
                    <b>السباكة  </b>
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
                    <b> كهربائي </b>
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
                    <b> تركيب كاميرات المراقبة </b>
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
                    <b> لحام </b>
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

            </div>
          </div>
        </div>
      </div>
      {/* OUR VALUE END */}
    </div>
  );
};

export default OurValue;

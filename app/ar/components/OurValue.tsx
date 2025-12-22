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
                {/* TITLE START */}
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
                      من الحقائق المعروفة أن القارئ قد يتشتت بسبب المحتوى المقروء
                      لصفحة ما عند النظر إلى تصميمها وترتيب عناصرها.
                    </p>
                  </div>
                </div>
                {/* TITLE END */}

                <div className="author-info p-t20 text-right">
                  <div className="author-signature">
                    <img
                      src="/images/Signature%2BBlack.png"
                      alt="التوقيع"
                      width={150}
                    />
                  </div>
                  <div className="author-name">
                    <h4 className="m-t0">ديفيد هوكر</h4>
                    <p>مهندس معماري ومؤسس</p>
                  </div>
                </div>

                {/* <div
                  className="video-section-full bg-no-repeat bg-cover overlay-wraper"
                  style={{ backgroundImage: "url(images/video-bg.jpg)" }}
                >
                  <div className="overlay-main bg-black opacity-07" />
                  <div className="video-section-inner">
                    <div className="video-section-content">
                      <div className="video-section-left">
                        <a
                          href="https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0"
                          className="mfp-video play-now"
                        >
                          <i className="icon fa fa-play" />
                          <span className="ripple" />
                        </a>
                      </div>
                      <div className="video-section-right">
                        <a
                          href="https://player.vimeo.com/video/34741214?color=ffffff&title=0&byline=0&portrait=0"
                          className="mfp-video font-weight-600 text-uppercase"
                        >
                          عرض تقديمي بالفيديو
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>

              {/* COUNTERS */}
              <div className="col-lg-3 col-md-6">
                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    450
                  </div>
                  <h4 className="m-tb0">خبراء نشطون</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    670
                  </div>
                  <h4 className="m-tb0">عملاء راضون</h4>
                </div>

                <div className="mt-count m-b30 text-white mt-icon-box-wraper center site-bg-dark p-a20">
                  <div className="counter font-30 font-weight-800 m-b15 site-text-primary">
                    1500
                  </div>
                  <h4 className="m-tb0">مشروع مكتمل</h4>
                </div>
              </div>

              {/* RIGHT COLUMN */}
              <div className="col-lg-5 col-md-6">
                <div className="our-exp text-right">
                  <div className="mt-box">
                    <h3 className="m-t0">
                      <span className="font-weight-100">لدينا</span>
                      <span className="site-text-primary"> 15 سنة</span>{" "}
                      من الخبرة في مجال الإنشاءات
                    </h3>
                  </div>

                  <span className="progressText text-black">
                    <b>الهندسة المعمارية</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "85%" }}
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>85%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>الإنشاءات</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "78%" }}
                      aria-valuenow={78}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>78%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>التصميم الداخلي</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow={65}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>65%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>البناء</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "78%" }}
                      aria-valuenow={78}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>78%</span>
                    </div>
                  </div>

                  <span className="progressText text-black">
                    <b>المشاريع التجارية</b>
                  </span>
                  <div className="progress m-b30 m-t10">
                    <div
                      className="progress-bar site-bg-primary progress-bar-striped progress-bar-animated text-black"
                      role="progressbar"
                      style={{ width: "95%" }}
                      aria-valuenow={95}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <span>95%</span>
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

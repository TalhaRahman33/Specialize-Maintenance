import React from "react";

const Spacialization = () => {
  return (
    <div dir="rtl">
      {/* OUR SPECIALLIZATION START */}
      <div
        className="section-full mobile-page-padding our-speci_wrap bg-white p-t80 p-b30 bg-repeat square_shape1"
        style={{ backgroundImage: "url(images/bg-5.png)" }}
      >
        <div className="container">
          {/* IMAGE CAROUSEL START */}
          <div className="section-content">
            <div className="row">
              {/* ITEM 1 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic1.jpg" alt="" />
                  <div className="figcaption">
                    <h4>الإنشاءات</h4>
                    <p>نصنع أحلامك بخبرة هندسية معنا.</p>
                    <a href="project-detail.html">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic2.jpg" alt="" />
                  <div className="figcaption">
                    <h4>الهندسة المعمارية</h4>
                    <p>الحياة هي عمارة.</p>
                    <a href="project-detail.html">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic3.jpg" alt="" />
                  <div className="figcaption site-bg-dark">
                    <h4>الترميم</h4>
                    <p>تصميم يلفت الأنظار</p>
                    <a href="project-detail.html">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTENT BOX */}
              <div className="col-xl-3 col-lg-12 col-md-6 m-b30">
                <div className="mt-box our-speciallization-content text-right">
                  <h3 className="m-t0">
                    <span className="font-weight-100">البناء</span> <br />
                    الأفضل عندما يكون بالخرسانة.
                  </h3>

                  <p>
                    عندما يتعلق الأمر بمنزلك، لا تقبل إلا بالأفضل. اجعل رؤيتك
                    حقيقة — هذا ما نفعله.
                  </p>

                  <a href="about-1.html" className="site-button btn-effect">
                    عرض الكل
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>مرحبًا</strong>
        </div>
      </div>
      {/* OUR SPECIALLIZATION END */}
    </div>
  );
};

export default Spacialization;

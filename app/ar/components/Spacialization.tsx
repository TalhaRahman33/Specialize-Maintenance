import React from "react";

const Spacialization = () => {
  return (
    <div dir="rtl">
      {/* OUR SPECIALIZATION START */}
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
                  <img src="/images/pic1.avif" alt="تركيب كاميرات المراقبة" />
                  <div className="figcaption">
                    <h4>تركيب كاميرات المراقبة</h4>
                    <p>
                      تركيب وإعداد أنظمة كاميرات المراقبة لتعزيز الأمان والمراقبة الفعّالة.
                    </p>
                    <a href="/ar/services">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic2.avif" alt="أعمال البناء" />
                  <div className="figcaption">
                    <h4>أعمال البناء</h4>
                    <p>
                      نحول أحلامك في البناء إلى واقع بخبرة عالية ودقة في التنفيذ.
                    </p>
                    <a href="/ar/services">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic3.avif" alt="أعمال اللحام" />
                  <div className="figcaption site-bg-dark">
                    <h4>أعمال اللحام</h4>
                    <p>
                      تنفيذ هياكل قوية ومتينة بدقة عالية وخبرة احترافية.
                    </p>
                    <a href="/ar/services">
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
                    الأفضل دائمًا مع الخرسانة.
                  </h3>
                  <p>
                    في شركتنا، لا نقوم ببناء المنازل فقط؛ بل نصنع بيوتًا متكاملة.
                    التزامنا بالجودة والابتكار يضمن تحويل رؤيتك إلى واقع ملموس.
                  </p>
                  <a href="/ar/services" className="site-button btn-effect">
                    عرض جميع الخدمات
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>التخصصات</strong>
        </div>
      </div>
      {/* OUR SPECIALIZATION END */}
    </div>
  );
};

export default Spacialization;

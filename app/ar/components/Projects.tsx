import React from "react";

const Projects = () => {
  return (
    <div dir="rtl">
      {/* OUR PROJECT START */}
      <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2">
        <div className="container">
          {/* TITLE START */}
          <div className="section-head text-right">
            <div className="mt-separator-outer separator-right">
              <div className="mt-separator">
                <h2 className="text-uppercase sep-line-one">
                  <span className="font-weight-300 site-text-primary">
                    مشاريعنا
                  </span>
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}

          <div className="section-content">
            <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
              {/* FILTER COLUMN */}
              <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
                <div className="bg-gray p-a30 text-right">
                  <div className="filter-wrap">
                    <ul className="filter-navigation masonry-filter text-uppercase">
                      <li className="active">
                        <a data-filter="*" data-hover="الكل" href="#">
                          الكل
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-1"
                          data-hover="تجاري"
                          href="#"
                        >
                          تجاري
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-4"
                          data-hover="تعليمي"
                          href="#"
                        >
                          تعليمي
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-2"
                          data-hover="مستشفى"
                          href="#"
                        >
                          مستشفى
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-3"
                          data-hover="سكني"
                          href="#"
                        >
                          سكني
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-5"
                          data-hover="مكتب"
                          href="#"
                        >
                          مكتب
                        </a>
                      </li>
                      <li>
                        <a
                          data-filter=".cat-6"
                          data-hover="إعادة إعمار"
                          href="#"
                        >
                          إعادة إعمار
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROJECT 1 */}
              <div className="masonry-item cat-2 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic1_3.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">أثاث الكراسي</h4>
                    <p className="m-b0">مسقط، سلطنة عُمان</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 2 */}
              <div className="masonry-item cat-2 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic2_2.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">أثاث</h4>
                    <p className="m-b0">المنزل الشمالي</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 3 */}
              <div className="masonry-item cat-6 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic3_3.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">غرفة المعيشة</h4>
                    <p className="m-b0">العقبة، الأردن</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 4 */}
              <div className="masonry-item cat-6 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic4_1.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">مساحة عمل مثالية</h4>
                    <p className="m-b0">بيرث، أستراليا</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 5 */}
              <div className="masonry-item cat-3 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic5_1.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">ديكور</h4>
                    <p className="m-b0">العقبة، الأردن</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 6 */}
              <div className="masonry-item cat-3 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic6.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">ديكور عصري</h4>
                    <p className="m-b0">مسقط، سلطنة عُمان</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 7 */}
              <div className="masonry-item cat-1 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic7.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">حمّام</h4>
                    <p className="m-b0">المنزل الشمالي</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 8 (LARGE) */}
              <div className="masonry-item cat-6 col-lg-6 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic-l-5.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">ديكور الإضاءة</h4>
                    <p className="m-b0">العقبة، الأردن</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 9 */}
              <div className="masonry-item cat-5 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic-1.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">بناء منزل</h4>
                    <p className="m-b0">سلطنة عُمان</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

              {/* PROJECT 10 */}
              <div className="masonry-item cat-4 col-lg-3 col-md-6 m-b30">
                <div className="mt-box image-hover-block">
                  <div className="mt-thum-bx">
                    <img src="/images/pic-2.jpg" alt="" />
                  </div>
                  <div className="mt-info p-t20 text-white text-right">
                    <h4 className="mt-tilte m-b10 m-t0">سكن سبا</h4>
                    <p className="m-b0">بيرث، أستراليا</p>
                  </div>
                  <a href="project-detail.html" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>المشاريع</strong>
        </div>
      </div>
      {/* OUR PROJECT END */}
    </div>
  );
};

export default Projects;

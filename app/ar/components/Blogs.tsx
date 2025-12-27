import React from "react";

const Blogs = () => {
  return (
    <div dir="rtl">
      {/* OUR BLOG START */}
      <div
        className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1"
        style={{ backgroundImage: "url(images/bg5.jpg)" }}
      >
        <div className="container">
          {/* TITLE START */}
          <div className="section-head">
            <div className="mt-separator-outer separator-center">
              <div className="mt-separator">
                <h2 className="text-white text-uppercase sep-line-one">
                  <span className="font-weight-300 site-text-primary">
                    أحدث
                  </span>{" "}
                  المقالات
                </h2>
              </div>
            </div>
          </div>
          {/* TITLE END */}

          {/* BLOG CARDS */}
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              {/* BLOG 1 */}
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="#">
                      <img src="/images/pic1_4.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30 text-right">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">14</strong>{" "}
                            <span>أبريل 2023</span>
                          </li>
                          <li className="post-author">
                            بواسطة <a href="#">الإدارة</a>
                          </li>
                          <li className="post-comment">
                            <a href="#">2 تعليق</a>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-post-title">
                        <h4 className="post-title m-b0">
                          تصميم تجاري لأحد المشاريع
                        </h4>
                      </div>

                      <div className="mt-post-text">
                        <p>
                          وهو ما يعني الابتعاد عن التعب والألم للوصول إلى
                          أفضل النتائج.
                        </p>
                      </div>

                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="اقرأ المزيد"
                          >
                            اقرأ المزيد{" "}
                            <i className="fa fa-angle-left arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOG 2 */}
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="#">
                      <img src="/images/pic2_3.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30 text-right">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">16</strong>{" "}
                            <span>فبراير 2023</span>
                          </li>
                          <li className="post-author">
                            بواسطة <a href="#">الإدارة</a>
                          </li>
                          <li className="post-comment">
                            <a href="#">2 تعليق</a>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-post-title">
                        <h4 className="post-title m-b0">
                          توقعاتنا لتصميمات الديكور الداخلي
                        </h4>
                      </div>

                      <div className="mt-post-text">
                        <p>
                          اليوم نستطيع أن نخبركم بذلك بفضل شغفكم، عملكم
                          الجاد، وإبداعكم.
                        </p>
                      </div>

                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="اقرأ المزيد"
                          >
                            اقرأ المزيد{" "}
                            <i className="fa fa-angle-left arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOG 3 */}
              <div className="col-lg-4 col-md-6">
                <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
                  <div className="mt-post-media mt-img-overlay7">
                    <a href="#">
                      <img src="/images/pic3_2.jpg" alt="" />
                    </a>
                  </div>
                  <div className="mt-post-info p-a30 text-right">
                    <div className="post-overlay-position">
                      <div className="mt-post-meta">
                        <ul>
                          <li className="post-date">
                            <strong className="site-text-primary">18</strong>{" "}
                            <span>يناير 2023</span>
                          </li>
                          <li className="post-author">
                            بواسطة <a href="#">الإدارة</a>
                          </li>
                          <li className="post-comment">
                            <a href="#">2 تعليق</a>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-post-title">
                        <h4 className="post-title m-b0">
                          أفكار تصميم داخلي بتكلفة منخفضة
                        </h4>
                      </div>

                      <div className="mt-post-text">
                        <p>
                          كل متعة مرحب بها، وكل ألم يمكن تجنبه في ظروف
                          معينة.
                        </p>
                      </div>

                      <div className="readmore-line">
                        <span>
                          <a
                            href="blog-grid.html"
                            className="site-button-link"
                            data-hover="اقرأ المزيد"
                          >
                            اقرأ المزيد{" "}
                            <i className="fa fa-angle-left arrow-animation" />
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        {/* <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
          <strong>المدونة</strong>
        </div> */}
      </div>
      {/* OUR BLOG END */}
    </div>
  );
};

export default Blogs;

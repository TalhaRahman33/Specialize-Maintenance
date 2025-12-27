import React from 'react'

const Blogs = () => {
  return (
    <div>
        {/* OUR BLOG START */}
  <div
    className="section-full mobile-page-padding latest-blog-wrap p-t80 p-b30 square_shape1"
    style={{ backgroundImage: "url(images/bg5.jpg)" }}
  >
    <div className="container">
      {/* TITLE START */}
      <div className="section-head ">
        <div className="mt-separator-outer separator-center">
          <div className="mt-separator">
            <h2 className="text-white text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">Latest</span>{" "}
              Blog
            </h2>
          </div>
        </div>
      </div>
      {/* TITLE END */}
      {/* IMAGE CAROUSEL START */}
      <div className="section-content">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img src="/images/pic1_4.jpg" alt="" />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">14</strong>{" "}
                        <span>April 2023</span>
                      </li>
                      <li className="post-author">
                        By <a href="javascript:;">Admin</a>{" "}
                      </li>
                      <li className="post-comment">
                        <a href="javascript:;">2 comment</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                      Commercial design for project
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Which is the same as saying through shrinking from toil
                      and pain.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Read More"
                      >
                        Read More{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img src="/images/pic2_3.jpg" alt="" />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">16</strong>{" "}
                        <span>Feb 2023</span>
                      </li>
                      <li className="post-author">
                        By <a href="javascript:;">Admin</a>{" "}
                      </li>
                      <li className="post-comment">
                        <a href="javascript:;">2 comment</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                      Our interior design prediction
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Today we can tell you, thanks to your passion, hard work
                      creativity, and expertise.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Read More"
                      >
                        Read More{" "}
                        <i className="fa fa-angle-right arrow-animation" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="mt-box blog-post latest-blog-3 date-style-1 bg-white m-b30">
              <div className="mt-post-media mt-img-overlay7">
                <a href="javascript:;">
                  <img src="/images/pic3_2.jpg" alt="" />
                </a>
              </div>
              <div className="mt-post-info p-a30">
                <div className="post-overlay-position">
                  <div className="mt-post-meta ">
                    <ul>
                      <li className="post-date">
                        <strong className="site-text-primary">18</strong>{" "}
                        <span>Jan 2023</span>
                      </li>
                      <li className="post-author">
                        By <a href="javascript:;">Admin</a>{" "}
                      </li>
                      <li className="post-comment">
                        <a href="javascript:;">2 comment</a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="mt-post-title ">
                    <h4 className="post-title m-b0">
                      Low cost interior designing ideas
                    </h4>
                  </div>
                  <div className="mt-post-text">
                    <p>
                      Every pleasure is to be welcomed every pain avoided. in
                      certain circumstances.
                    </p>
                  </div>
                  <div className="readmore-line">
                    <span>
                      <a
                        href="blog-grid.html"
                        className="site-button-link"
                        data-hover="Read More"
                      >
                        Read More{" "}
                        <i className="fa fa-angle-right arrow-animation" />
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
    {/* <div className="hilite-title text-right p-r50 text-uppercase hilite-dark">
      <strong>Blog</strong>
    </div> */}
  </div>
  {/* OUR BLOG END */}
    </div>
  )
}

export default Blogs

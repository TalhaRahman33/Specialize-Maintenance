import React from 'react'

const Projects = () => {
  return (
    <div>
       {/* OUR PROJECT START */}
  <div className="section-full mobile-page-padding our-project-wrap p-t80 p-b30 square_shape2">
    <div className="container">
      {/* TITLE START */}
      <div className="section-head">
        <div className="mt-separator-outer separator-left">
          <div className="mt-separator">
            <h2 className="text-uppercase sep-line-one ">
              <span className="font-weight-300 site-text-primary">Our</span>{" "}
              Project
            </h2>
          </div>
        </div>
      </div>
      {/* TITLE END */}
      <div className="section-content">
        <div className="portfolio-wrap row mfp-gallery product-stamp clearfix">
          {/* COLUMNS 1 */}
          <div className="stamp masonry-item col-lg-3 col-md-6 m-b30">
            <div className="bg-gray p-a30">
              <div className="filter-wrap">
                <ul className="filter-navigation masonry-filter text-uppercase">
                  <li className="active">
                    <a data-filter="*" data-hover="All" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-1"
                      data-hover="Commercial"
                      href="javascript:;"
                    >
                      Commercial
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-4"
                      data-hover="Education"
                      href="javascript:;"
                    >
                      Education
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-2"
                      data-hover="Hospital"
                      href="javascript:;"
                    >
                      Hospital{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-3"
                      data-hover="Residentia"
                      href="javascript:;"
                    >
                      Residentia
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-5"
                      data-hover="Office"
                      href="javascript:;"
                    >
                      Office
                    </a>
                  </li>
                  <li>
                    <a
                      data-filter=".cat-6"
                      data-hover="Reconstruction"
                      href="javascript:;"
                    >
                      Reconstruction{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* COLUMNS 2 */}
          <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic1_3.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Chair Furniture</h4>
                <p className="m-b0">Muscat, Sultanate of Oman</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 3 */}
          <div className="masonry-item  cat-2 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic2_2.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Furniture</h4>
                <p className="m-b0">North House</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 4 */}
          <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic3_3.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Living room</h4>
                <p className="m-b0">Aqaba, Jordan</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 5 */}
          <div className="masonry-item  cat-6 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic4_1.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Dream Workspace</h4>
                <p className="m-b0">Perth, Australia </p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 6 */}
          <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic5_1.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Decore</h4>
                <p className="m-b0">Aqaba, Jordan</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 7 */}
          <div className="masonry-item  cat-3 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic6.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Modern Decoration</h4>
                <p className="m-b0">Muscat, Sultanate of Oman</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 8 */}
          <div className="masonry-item  cat-1 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic7.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Bathroom</h4>
                <p className="m-b0">North House</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 11 */}
          <div className="masonry-item  cat-6 col-lg-6 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic-l-5.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Lamp decoration</h4>
                <p className="m-b0">Aqaba, Jordan</p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 9 */}
          <div className="masonry-item  cat-5 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic-1.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Building house</h4>
                <p className="m-b0">Ultanate of Oman </p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
          {/* COLUMNS 10 */}
          <div className="masonry-item  cat-4 col-lg-3 col-md-6 m-b30">
            <div className="mt-box   image-hover-block">
              <div className="mt-thum-bx">
                <img src="/images/pic-2.jpg" alt="" />
              </div>
              <div className="mt-info  p-t20 text-white">
                <h4 className="mt-tilte m-b10 m-t0">Spa residence</h4>
                <p className="m-b0">Perth, Australia </p>
              </div>
              <a href="project-detail.html" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
      <strong>Projects</strong>
    </div>
  </div>
  {/* OUR PROJECT END */}
    </div>
  )
}

export default Projects

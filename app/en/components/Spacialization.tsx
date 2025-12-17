

const Spacialization = () => {
  return (
    <>
  {/* OUR SPECIALLIZATION START */}
  <div
    className="section-full mobile-page-padding our-speci_wrap bg-white  p-t80 p-b30 bg-repeat square_shape1"
    style={{ backgroundImage: "url(images/bg-5.png)" }}
  >
    <div className="container">
      {/* IMAGE CAROUSEL START */}
      <div className="section-content">
        <div className="row">
          <div className="col-xl-3 col-lg-4 col-md-6  m-b30">
            <div className="image-effect-one hover-shadow">
              <img src="/images/pic1.jpg" alt="" />
              <div className="figcaption">
                <h4>Construction</h4>
                <p>Engineering your dreams with us.</p>
                <a href="project-detail.html">
                  <i className="link-plus site-bg-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
            <div className="image-effect-one hover-shadow">
              <img src="/images/pic2.jpg" alt="" />
              <div className="figcaption">
                <h4>Architecture</h4>
                <p>Life is Architecture.</p>
                <a href="project-detail.html">
                  <i className="link-plus site-bg-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
            <div className="image-effect-one hover-shadow">
              <img src="/images/pic3.jpg" alt="" />
              <div className="figcaption site-bg-dark">
                <h4>Renovation</h4>
                <p>Dazzling Design</p>
                <a href="project-detail.html">
                  <i className="link-plus site-bg-primary" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-12 col-md-6 m-b30">
            <div className="mt-box our-speciallization-content">
              <h3 className="m-t0">
                <span className="font-weight-100">Building</span> <br />
                It better in concrete.
              </h3>
              <p>
                When it comes to your house, don’t mess with the rest, trust the
                best. Making your vision come true, that is what we do.
              </p>
              <a href="about-1.html" className="site-button btn-effect">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
      <strong>Welcome</strong>
    </div>
  </div>
  {/* OUR SPECIALLIZATION END */}
</>

  )
}

export default Spacialization

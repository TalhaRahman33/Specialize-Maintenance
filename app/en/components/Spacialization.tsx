const Spacialization = () => {
  return (
    <>
      {/* OUR SPECIALIZATION START */}
      <div
        className="section-full mobile-page-padding our-speci_wrap bg-white p-t80 p-b30 bg-repeat square_shape1"
        style={{ backgroundImage: "url(images/bg-5.png)" }}
      >
        <div className="container">
          {/* IMAGE CAROUSEL START */}
          <div className="section-content">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic1.jpg" alt="Construction" />
                  <div className="figcaption">
                    <h4>Construction</h4>
                    <p>Bringing your construction dreams to life with precision and expertise.</p>
                    <a href="/en/services">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic2.jpg" alt="Architecture" />
                  <div className="figcaption">
                    <h4>Architecture</h4>
                    <p>Designing spaces that inspire, innovate, and create lasting memories.</p>
                    <a href="/en/services">
                      <i className="link-plus site-bg-primary" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 m-b30">
                <div className="image-effect-one hover-shadow">
                  <img src="/images/pic3.jpg" alt="Renovation" />
                  <div className="figcaption site-bg-dark">
                    <h4>Renovation</h4>
                    <p>Transforming spaces with a focus on style, functionality, and innovation.</p>
                    <a href="/en/services">
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
                    At our firm, we don’t just build houses; we create homes. Our dedication to quality and innovation ensures your vision becomes a reality.
                  </p>
                  <a href="/en/services" className="site-button btn-effect">
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
      {/* OUR SPECIALIZATION END */}
    </>
  );
};

export default Spacialization;

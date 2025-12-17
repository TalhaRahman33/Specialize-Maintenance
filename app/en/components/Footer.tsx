import React from "react";

const Footer = () => {
  return (
    <div dir="ltr">
      {/* FOOTER START */}
      <footer className="site-footer footer-large footer-dark footer-wide">
        {/* FOOTER TOP */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />

          <div className="container">
            <div className="row">

              {/* COMPANY INFO - LEFT SIDE */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about text-left">
                  <h4 className="widget-title">Specialist Business Company</h4>

                  <p className="max-w400" style={{ marginRight: "auto" }}>
                    Specialized Business Company specializes in electrical materials,
                    offering high-quality products at competitive prices. We provide a
                    wide range of innovative electrical solutions for companies,
                    institutions, and individuals.
                  </p>

                  {/* SOCIAL ICONS */}
                  <ul
                    className="social-icons mt-social-links"
                    style={{ justifyContent: "flex-start" }}
                  >
                    <li>
                      <a href="#" className="fa fa-music" title="TikTok" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-snapchat-ghost" title="Snapchat" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-twitter" title="X" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-instagram" title="Instagram" />
                    </li>
                  </ul>

                  {/* TAX & REGISTRATION */}
                  <div style={{ marginTop: 18, textAlign: "left" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "flex-start",
                        flexWrap: "wrap",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600 }}>Tax ID Number</div>
                        <div>310448142800003</div>
                      </div>

                      <div>
                        <div style={{ fontWeight: 600 }}>Commercial Register</div>
                        <div>1010601919</div>
                      </div>

                      <div>
                        <img
                          src="/images/saudi-logo.AVIF"
                          alt="Saudi Arabia"
                          style={{ height: 36, width: "auto", marginTop: 4 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPORTANT LINKS - CENTER */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services inline-links text-center">
                  <h4 className="widget-title">Important Links</h4>
                  <ul>
                    <li>
                      <a href="/about">Who Are We?</a>
                    </li>
                    <li>
                      <a href="/policy">Exchange & Return Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CONTACT US - RIGHT SIDE */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_address_outer text-right">
                  <h4 className="widget-title">Contact Us</h4>

              <ul className="widget_address">
  <li>
    <i
      className="fa fa-whatsapp"
      style={{
        marginLeft: 14,
        fontSize: 18,
        verticalAlign: "middle",
      }}
    />
    <a
      href="https://wa.me/966539771718"
      target="_blank"
      rel="noreferrer"
      style={{ color: "white" }}
    >
      +966 539 771 718
    </a>
  </li>

  <li>
    <i
      className="fa fa-mobile"
      style={{
        marginLeft: 14,
        fontSize: 18,
        verticalAlign: "middle",
      }}
    />
    <a href="tel:+966539774020" style={{ color: "white" }}>
      +966 539 774 020
    </a>
  </li>

  <li>
    <i
      className="fa fa-phone"
      style={{
        marginLeft: 14,
        fontSize: 18,
        verticalAlign: "middle",
      }}
    />
    <a href="tel:+966539771718" style={{ color: "white" }}>
      +966 539 771 718
    </a>
  </li>

  <li>
    <i
      className="fa fa-envelope"
      style={{
        marginLeft: 14,
        fontSize: 17,
        verticalAlign: "middle",
      }}
    />
    <a href="mailto:a22@live.at" style={{ color: "white" }}>
      a22@live.at
    </a>
  </li>
</ul>

                </div>
              </div>

            </div>

            {/* PAYMENT METHODS */}
            <div
              style={{
                marginTop: 26,
                display: "flex",
                justifyContent: "center",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <img src="/images/payments/applepay.png" alt="Apple Pay" style={{ height: 28 }} />
              <img src="/images/payments/mada.png" alt="Mada" style={{ height: 28 }} />
              <img src="/images/payments/bank.png" alt="Bank Transfer" style={{ height: 28 }} />
              <img src="/images/payments/visa.png" alt="Visa" style={{ height: 28 }} />
              <img src="/images/payments/mastercard.png" alt="Mastercard" style={{ height: 28 }} />
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="row">
              <div className="mt-footer-bot-center text-center">
                <span className="copyrights-text">
                  © 2025 Specialized Business Company. All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};

export default Footer;

"use client";

import React from "react";
import {
  Instagram,
  Twitter,
  Ghost,
  Music,
  MessageCircle,
  Phone,
  Smartphone,
  Mail,
} from "lucide-react";

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
              {/* COMPANY INFO */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about text-left">
                  <h4 className="widget-title">Specialist Business Company</h4>

                  <p className="max-w400">
                    Specialized Business Company specializes in electrical
                    materials, offering high-quality products at competitive
                    prices. We provide innovative electrical solutions for
                    companies and individuals.
                  </p>

                  {/* SOCIAL ICONS */}
                  <ul className="social-icons mt-social-links">
                    <li>
                      <a href="#" className="socialBtn">
                        <Music size={16} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="socialBtn">
                        <Ghost size={16} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="socialBtn">
                        <Twitter size={16} />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="socialBtn">
                        <Instagram size={16} />
                      </a>
                    </li>
                  </ul>

                  {/* TAX INFO */}
                  <div className="taxRow">
                    <div>
                      <strong>Tax ID</strong>
                      <div>310448142800003</div>
                    </div>
                    <div>
                      <strong>CR</strong>
                      <div>1010601919</div>
                    </div>
                    <img
                      src="/images/saudilogo.AVIF"
                      alt="Saudi"
                      className="saudiLogo"
                    />
                  </div>
                </div>
              </div>

              {/* IMPORTANT LINKS */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services text-center">
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

              {/* CONTACT US */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_address_outer contactBlock">
                  <h4 className="widget-title">Contact Us</h4>

                  <ul className="widget_address">
                    <li>
                      <span className="iconWrap">
                        <MessageCircle size={16} />
                      </span>
                      <a
                        href="https://wa.me/966539771718"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +966 539 771 718
                      </a>
                    </li>

                    <li>
                      <span className="iconWrap">
                        <Smartphone size={16} />
                      </span>
                      <a href="tel:+966539774020">
                        +966 539 774 020
                      </a>
                    </li>

                    <li>
                      <span className="iconWrap">
                        <Phone size={16} />
                      </span>
                      <a href="tel:+966539771718">
                        +966 539 771 718
                      </a>
                    </li>

                    <li>
                      <span className="iconWrap">
                        <Mail size={16} />
                      </span>
                      <a href="mailto:a22@live.at">
                        a22@live.at
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PAYMENT METHODS */}
            <div className="paymentRow">
              {["cod", "apple", "credit", "mada", "bank"].map((p) => (
                <div className="payPill" key={p}>
                  <img
                    src={`/images/${p}.AVIF`}
                    alt={p}
                    className="payImg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container text-center">
            © 2025 Specialized Business Company. All rights reserved.
          </div>
        </div>

        {/* LOCAL STYLES */}
        <style jsx>{`
          /* Social buttons */
          .socialBtn {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: #fff;
          }

          /* Contact list */
          .widget_address {
            margin-top: 12px;
            display: grid;
            gap: 8px; /* 🔽 reduced spacing */
          }

          .widget_address li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-left: 6px; /* 👉 move right slightly */
          }

          .iconWrap {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.12);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }

          .widget_address a {
            color: #fff;
            font-size: 14.5px;
            font-weight: 600;
            line-height: 1.1;
          }

          /* Payment pills */
          .paymentRow {
            margin-top: 24px;
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .payPill {
            background: #fff;
            border-radius: 999px;
            padding: 8px 14px;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          }

          .payImg {
            height: 22px;
          }

          /* Tax */
          .taxRow {
            margin-top: 18px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            align-items: center;
          }

          .saudiLogo {
            height: 34px;
          }
        `}</style>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};

export default Footer;

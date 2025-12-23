"use client";

import React from "react";
import type { CSSProperties } from "react";
import {
  Instagram,
  Twitter,
  Ghost,
  Music,
  Youtube,
  Facebook,
  MessageCircle,
  Phone,
  Smartphone,
  Mail,
} from "lucide-react";

const Footer = () => {
  const socialBtnStyle: CSSProperties = {
    width: 38,
    height: 38,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#f5c400",
  };

  return (
    <div dir="ltr">
      <footer className="site-footer footer-large footer-dark footer-wide">
        {/* ================= FOOTER TOP ================= */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />

          <div className="container">
            <div className="row">
              {/* ===== LEFT: COMPANY ===== */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about text-left">
                  <h4 className="widget-title">Specialist Business Company</h4>

                  <p className="max-w400">
                    Specialized Business Company specializes in electrical
                    materials, offering high-quality products at competitive
                    prices. We provide innovative electrical solutions for
                    companies and individuals.
                  </p>

                  {/* Social Icons */}
                  <ul
                    className="social-icons mt-social-links"
                    style={{
                      display: "flex",
                      gap: 10,
                      marginTop: 14,
                      padding: 0,
                      listStyle: "none",
                    }}
                  >
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Facebook size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Youtube size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Instagram size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Twitter size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Ghost size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" style={socialBtnStyle}>
                        <Music size={18} />
                      </a>
                    </li>
                  </ul>

                  {/* Tax + CR */}
                  <div style={{ marginTop: 18 }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 24,
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <strong>Tax ID</strong>
                        <div>310448142800003</div>
                      </div>

                      <div>
                        <strong>CR</strong>
                        <div>1010601919</div>
                      </div>

                      <img
                        src="/images/saudilogo.avif"
                        alt="Saudi Arabia"
                        style={{ height: 36 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* ===== CENTER: IMPORTANT LINKS ===== */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services text-center">
                  <h4 className="widget-title">Important Links</h4>

                  <ul className="importantLinksUl">
                    <li>
                      <a href="/about">Who Are We?</a>
                    </li>
                    <li>
                      <a href="/policy">Exchange &amp; Return Policy</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* ===== RIGHT: CONTACT US ===== */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="widget widget_address_outer contactRight">
                  <h4 className="widget-title contactTitleRight">Contact Us</h4>

                  <ul className="contactListRight">
                    <li className="contactItemRight">
                      <span className="iconWrap">
                        <MessageCircle size={18} />
                      </span>
                      <a
                        href="https://wa.me/966539771718"
                        target="_blank"
                        rel="noreferrer"
                        className="contactLinkRight"
                      >
                        +966539771718
                      </a>
                    </li>

                    <li className="contactItemRight">
                      <span className="iconWrap">
                        <Smartphone size={18} />
                      </span>
                      <a
                        href="tel:+966539774020"
                        className="contactLinkRight"
                      >
                        +966539774020
                      </a>
                    </li>

                    <li className="contactItemRight">
                      <span className="iconWrap">
                        <Phone size={17} />
                      </span>
                      <a
                        href="tel:+966539771718"
                        className="contactLinkRight"
                      >
                        +966539771718
                      </a>
                    </li>

                    {/* <li className="contactItemRight">
                      <span className="iconWrap">
                        <Mail size={17} />
                      </span>
                      <a
                        href="mailto:a22@live.at"
                        className="contactLinkRight"
                      >
                        a22@live.at
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>

            {/* ===== PAYMENT METHODS ===== */}
            <div className="paymentRow">
              {["cod", "apple", "credit", "mada", "bank"].map((p) => (
                <div className="payPill" key={p}>
                  <img src={`/images/${p}.avif`} className="payImg" alt={p} />
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ================= FOOTER BOTTOM ================= */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container text-center">
            © 2025 Specialist Business Company. All rights reserved.
          </div>
        </div>

        {/* ================= STYLES ================= */}
        <style jsx>{`
          .iconWrap {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.12);
            color: #fff;
          }

          /* Important Links */
          .importantLinksUl {
            list-style: none;
            padding: 0;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
          }

          /* Contact Us */
          .contactRight {
            text-align: right;
          }

          .contactTitleRight {
            margin-bottom: 10px;
          }

          .contactListRight {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: flex-end;
          }

          .contactItemRight {
            display: flex;
            align-items: center;
            gap: 12px;
            direction: ltr;
          }

          .contactLinkRight {
            line-height: 1;
            font-weight: 600;
            color: #fff;
          }

          /* Payments */
          .paymentRow {
            margin-top: 26px;
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
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;

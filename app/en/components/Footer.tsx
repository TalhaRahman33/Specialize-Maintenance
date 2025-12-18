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
              {/* COMPANY INFO - LEFT SIDE */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about text-left">
                  <h4 className="widget-title">Specialist Business Company</h4>

                  <p className="max-w400" style={{ marginRight: "auto" }}>
                    Specialized Business Company specializes in electrical
                    materials, offering high-quality products at competitive
                    prices. We provide a wide range of innovative electrical
                    solutions for companies, institutions, and individuals.
                  </p>

                  {/* SOCIAL ICONS (lucide-react) */}
                  <ul
                    className="social-icons mt-social-links"
                    style={{ justifyContent: "flex-start", gap: 10 }}
                  >
                    <li>
                      <a href="#" title="TikTok" className="socialBtn">
                        <Music size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Snapchat" className="socialBtn">
                        <Ghost size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="X" className="socialBtn">
                        <Twitter size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Instagram" className="socialBtn">
                        <Instagram size={18} />
                      </a>
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
                      <span className="iconWrap">
                        <MessageCircle size={18} />
                      </span>
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
                      <span className="iconWrap">
                        <Smartphone size={18} />
                      </span>
                      <a href="tel:+966539774020" style={{ color: "white" }}>
                        +966 539 774 020
                      </a>
                    </li>

                    <li>
                      <span className="iconWrap">
                        <Phone size={18} />
                      </span>
                      <a href="tel:+966539771718" style={{ color: "white" }}>
                        +966 539 771 718
                      </a>
                    </li>

                    <li>
                      <span className="iconWrap">
                        <Mail size={18} />
                      </span>
                      <a href="mailto:a22@live.at" style={{ color: "white" }}>
                        a22@live.at
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PAYMENT METHODS (white background like screenshot) */}
            <div className="paymentRow">
              <div className="payPill">
                <img
                  src="/images/cod_mini.AVIF"
                  alt="Cash on Delivery"
                  className="payImg"
                />
              </div>

              <div className="payPill">
                <img
                  src="/images/apple_pay_mini.AVIF"
                  alt="Apple Pay"
                  className="payImg"
                />
              </div>

              <div className="payPill">
                <img src="/images/credit_card_mini.AVIF" alt="Visa" className="payImg" />
              </div>

              <div className="payPill">
                <img src="/images/mada_mini.AVIF" alt="Mastercard" className="payImg" />
              </div>

              <div className="payPill">
                <img src="/images/bank_mini.AVIF" alt="Mada" className="payImg" />
              </div>
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

        {/* Local styles */}
        <style jsx>{`
          .socialBtn {
            width: 38px;
            height: 38px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.35);
            color: #fff;
            transition: 0.2s ease;
          }
          .socialBtn:hover {
            transform: translateY(-1px);
            border-color: rgba(255, 255, 255, 0.7);
          }

          .widget_address li {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 10px;
            margin-bottom: 10px;
          }

          .iconWrap {
            width: 34px;
            height: 34px;
            border-radius: 999px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.12);
            color: #fff;
            flex: 0 0 auto;
          }

          .paymentRow {
            margin-top: 26px;
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          /* White pills like your screenshot */
          .payPill {
            background: #fff;
            border-radius: 999px;
            padding: 8px 14px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
          }

          .payImg {
            height: 22px;
            width: auto;
            display: block;
          }

          @media (max-width: 768px) {
            .widget_address li {
              justify-content: flex-start;
            }
          }
        `}</style>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};

export default Footer;

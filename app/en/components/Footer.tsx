"use client";

import React from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  MessageCircle,
  Phone,
  Smartphone,
  Music2,
} from "lucide-react";

const Footer = () => {
  return (
    <div dir="ltr">
      <footer className="site-footer">
        {/* FOOTER TOP */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              {/* LEFT */}
              <div className="col">
                <div className="widget">
                  <div className="footer-logo">
                    <img src="/images/logoo.png" alt="Logo" />
                  </div>

                  <h4 className="widget-title">
                    Specialize Working Company
                  </h4>

                  <p className="footer-description">
                    Specialize Working Company provides premium electrical
                    products and reliable maintenance solutions with the best
                    quality at competitive prices.
                  </p>

                  <div className="social-section">
                    {/* <h5 className="social-title">Follow Us</h5> */}
                    <ul className="social-icons">
                      <li>
                        <a className="social-btn facebook">
                          <Facebook size={20} />
                        </a>
                      </li>
                      <li>
                        <a className="social-btn instagram">
                          <Instagram size={20} />
                        </a>
                      </li>
                      <li>
                        <a className="social-btn twitter">
                          <Twitter size={20} />
                        </a>
                      </li>
                      <li>
                        <a className="social-btn tiktok">
                          <Music2 size={20} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CENTER */}
              <div className="col">
                <div className="widget widget_services">
                  <h4 className="widget-title">Quick Links</h4>
                  <ul className="footer-links">

                    <li><a href="/en/home">› Home</a></li>
                    <li><a href="/en/about">› About</a></li>
                    <li><a href="/en/services">› Services</a></li>
                    <li><a href="/en/portfolio">› Portfolio</a></li>
                    <li><a href="/#">› Return & Refund Policy</a></li>
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col contact-col">
                <div className="widget widget_address_outer">
                  <h4 className="widget-title">Contact Us</h4>

                  <ul className="contact-list">

                    <li className="contact-item">
                      <span className="icon-wrap whatsapp">
                        <MessageCircle size={20} />
                      </span>
                      <a
                        href="https://wa.me/966550196380"
                        className="contact-link"
                      >
                        +966 550196380
                      </a>
                    </li>

                    <li className="contact-item">
                      <span className="icon-wrap mobile">
                        <Smartphone size={20} />
                      </span>
                      <a
                        href="tel:+966576150857"
                        className="contact-link"
                      >
                       +966 576150857
                      </a>
                    </li>

                    {/* <li className="contact-item">
                      <span className="icon-wrap phone">
                        <Phone size={20} />
                      </span>
                      <a
                        href="tel:+966539771718"
                        className="contact-link"
                      >
                        +966 539 771 718
                      </a>
                    </li> */}
                  </ul>

                  <div className="credentials">
                    <div className="cred-item">
                      <strong>Tax ID</strong>
                      <span>310448142800003</span>
                    </div>
                    <div className="cred-item">
                      <strong>CR</strong>
                      <span>1010601919</span>
                    </div>
                    <img
                      src="/images/saudilogo.avif"
                      alt="Saudi Arabia"
                      className="saudi-logo"
                    />
                  </div>

                  
                </div>
              </div>
            </div>

            {/* PAYMENT METHODS (ADDED ✅) */}
            <div className="paymentRow">
              <div className="payPill">
                <img src="/images/cod.avif" alt="Cash on Delivery" />
              </div>
              <div className="payPill">
                <img src="/images/apple.avif" alt="Apple Pay" />
              </div>
              <div className="payPill">
                <img src="/images/credit.avif" alt="Visa" />
              </div>
              <div className="payPill">
                <img src="/images/mada.avif" alt="Mada" />
              </div>
              <div className="payPill">
                <img src="/images/bank.avif" alt="Bank Transfer" />
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          © 2025 Specialize Working Company. All rights reserved.
        </div>

        {/* STYLES */}
        <style jsx>{`
          .site-footer {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: #e0e0e0;
          }

          .footer-top {
            padding: 60px 0 40px;
          }

          .container {
            max-width: 1200px;
            margin: auto;
            padding: 0 15px;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
          }

          .col {
            flex: 1;
            padding: 15px;
            min-width: 280px;
          }

          .footer-logo img {
            width: 60px;
            background: #fff;
            padding: 8px;
            border-radius: 50%;
          }

          .widget-title {
            color: #fff;
            margin: 20px 0;
          }

          .footer-description {
            color: #b0b0b0;
            line-height: 1.7;
          }

          /* SOCIAL */
          .social-icons {
            display: flex;
            gap: 12px;
          }

          .social-btn {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            transition: transform 0.3s;
          }

          .social-btn:hover {
            transform: translateY(-4px);
          }

          .facebook { background: #1877f2; }
          .instagram { background: #e1306c; }
          .twitter { background: #1da1f2; }
          .tiktok { background: #000; }

          /* LINKS */
          .footer-links {
            list-style: none;
            padding: 0;
          }

          .footer-links li {
            margin-bottom: 10px;
          }

          .footer-links a {
            color: #b0b0b0;
            text-decoration: none;
          }

          /* CONTACT */
          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 14px;
          }

          .icon-wrap {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
          }

          .whatsapp { background: #25d366; }
          .mobile { background: #ff6b35; }
          .phone { background: #667eea; }

          .contact-link {
            color: #fff;
            font-weight: 600;
            text-decoration: none;
          }

          .credentials {
            margin-top: 20px;
            display: flex;
            gap: 15px;
            align-items: center;
            flex-wrap: wrap;
          }

          .cred-item {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .cred-item strong {
            color: #fff;
            font-size: 12px;
          }

          .cred-item span {
            color: #fff;
            font-weight: 600;
          }

          .saudi-logo {
            height: 40px;
          }

          /* PAYMENT */
          .paymentRow {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid rgba(255,255,255,0.1);
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .payPill {
            background: #fff;
            padding: 8px 16px;
            border-radius: 999px;
            box-shadow: 0 6px 18px rgba(0,0,0,0.15);
          }

          .payPill img {
            height: 24px;
          }

          .footer-bottom {
            padding: 15px;
            text-align: center;
            background: rgba(0,0,0,0.3);
            font-size: 16px;
          }

          @media (max-width: 768px) {
            .row {
              flex-direction: column;
              text-align: center;
            }

            .social-icons {
              justify-content: center;
            }

            .paymentRow {
              justify-content: center;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;

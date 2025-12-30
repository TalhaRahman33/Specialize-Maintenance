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
                    Specialize Maintenance Company
                  </h4>

                  <p className="footer-description">
                    Specialize Maintenance Company delivers reliable maintenance
                    services and premium electrical solutions, including indoor &
                    outdoor lighting and decorative lamps.
                  </p>

                  <div className="social-section">
                    <h5 className="social-title">Follow Us</h5>
                    <ul className="social-icons">
                      <li><a className="social-btn facebook"><Facebook size={20} /></a></li>
                      <li><a className="social-btn instagram"><Instagram size={20} /></a></li>
                      <li><a className="social-btn twitter"><Twitter size={20} /></a></li>
                      <li><a className="social-btn tiktok"><Music2 size={20} /></a></li>
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
                    <li><a href="/policy">› Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <div className="col contact-col">
                <div className="widget widget_address_outer">
                  <h4 className="widget-title contact-title">Contact Us</h4>

                  <ul className="contact-list">
                    <li className="contact-item">
                      <span className="icon-wrap whatsapp"><MessageCircle size={20} /></span>
                      <div className="contact-info">
                        {/* <span className="label">WhatsApp</span> */}
                        <a href="https://wa.me/966539771718" className="contact-link">
                          +966 539 771 718
                        </a>
                      </div>
                    </li>

                    <li className="contact-item">
                      <span className="icon-wrap mobile"><Smartphone size={20} /></span>
                      <div className="contact-info">
                        {/* <span className="label">Mobile</span> */}
                        <a href="tel:+966539774020" className="contact-link">
                          +966 539 774 020
                        </a>
                      </div>
                    </li>

                    <li className="contact-item">
                      <span className="icon-wrap phone"><Phone size={20} /></span>
                      <div className="contact-info">
                        {/* <span className="label">Phone</span> */}
                        <a href="tel:+966539771718" className="contact-link">
                          +966 539 771 718
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="credentials">
                    <div>
                      <strong>Tax ID</strong>
                      <span>310448142800003</span>
                    </div>
                    <div>
                      <strong>CR</strong>
                      <span>1010601919</span>
                    </div>
                    <img src="/images/saudilogo.avif" alt="Saudi" className="saudi-logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom">
          <p>© 2025 Specialized Working Company. All rights reserved.</p>
          <p>Designed & Developed ❤ by <strong>Muhammad Talha</strong></p>
        </div>

        {/* STYLES */}
        <style jsx>{`
          .site-footer {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            color: #e0e0e0;
          }

          .footer-top {
            padding: 60px 0;
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

          .contact-col {
            display: flex;
            justify-content: flex-end;
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

          /* SOCIAL */
          .social-icons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }

          .social-btn {
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
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
            margin-bottom: 8px;
          }

          .footer-links a {
            color: #b0b0b0;
            text-decoration: none;
          }

          /* CONTACT */
          .widget_address_outer {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
          }

          .contact-list {
            list-style: none;
            padding: 0;
            width: 100%;
          }

          .contact-item {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 14px;
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
            flex-shrink: 0;
          }

          .whatsapp { background: #25d366; }
          .mobile { background: #ff6b35; }
          .phone { background: #667eea; }

          .contact-info {
            text-align: right;
          }

          .label {
            font-size: 12px;
            color: #aaa;
          }

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
            justify-content: flex-end;
          }

          .saudi-logo {
            height: 40px;
          }

          .footer-bottom {
            padding: 20px;
            text-align: center;
            background: rgba(0,0,0,0.3);
          }

          /* 📱 MOBILE RESPONSIVE */
          @media (max-width: 768px) {
            .row {
              flex-direction: column;
            }

            .contact-col {
              justify-content: center;
            }

            .widget_address_outer {
              align-items: center;
            }

            .contact-item {
              justify-content: center;
            }

            .contact-info {
              text-align: center;
            }

            .social-icons {
              justify-content: center;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;

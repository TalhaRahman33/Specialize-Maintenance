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
import Link from "next/link";

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
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn facebook"
                          aria-label="Follow us on Facebook"
                        >
                          <Facebook size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn instagram"
                          aria-label="Follow us on Instagram"
                        >
                          <Instagram size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn twitter"
                          aria-label="Follow us on Twitter"
                        >
                          <Twitter size={20} />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn tiktok"
                          aria-label="Follow us on TikTok"
                        >
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
      <li>
        <Link href="/en/home" className="ql-link">› Home</Link>
      </li>
      <li>
        <Link href="/en/about" className="ql-link">› About</Link>
      </li>
      <li>
        <Link href="/en/services" className="ql-link">› Services</Link>
      </li>
      <li>
        <Link href="/en/portfolio" className="ql-link">› Portfolio</Link>
      </li>
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
 
/* LINKS */
.footer-links {
  list-style: none;
  padding: 0;
  color: #ffffff; /* ← yeh add karo */
}

.footer-links li {
  margin-bottom: 10px;
  color: #ffffff; /* ← yeh add karo */
}

.footer-link {
  color: #ffffff;
  text-decoration: none;
}




/* QUICK LINKS - Custom Fix */
.ql-link {
  color: #ffffff !important;
  text-decoration: none;
  font-size: 15px;
  display: inline-block;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.ql-link:hover {
  color: #f5c518 !important;
  padding-left: 6px;
}

.footer-links li {
  margin-bottom: 12px;
  color: #ffffff;
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

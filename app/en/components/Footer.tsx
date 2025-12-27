"use client";

import React from "react";
import { Instagram, Twitter, Youtube, Facebook, MessageCircle, Phone, Smartphone } from "lucide-react";

const Footer = () => {
  return (
    <div dir="ltr">
      <footer className="site-footer footer-large footer-dark footer-wide">
        {/* FOOTER TOP */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />

          <div className="container">
            <div className="row">
              {/* LEFT: COMPANY */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <img src="/images/logoo.png" alt="Logo" />
                  </div>

                  <h4 className="widget-title">Specialized Maintanance Company</h4>

                  <p className="footer-description">
                    Specialized Business Company specializes in electrical materials, offering high-quality products at competitive
                    prices. We provide innovative electrical solutions for companies and individuals.
                  </p>

                  {/* Social Icons */}
                  <div className="social-section">
                    <h5 className="social-title">Follow Us</h5>
                    <ul className="social-icons">
                      <li>
                        <a href="#" className="social-btn facebook" aria-label="Facebook">
                          <Facebook size={20} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-btn youtube" aria-label="YouTube">
                          <Youtube size={20} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-btn instagram" aria-label="Instagram">
                          <Instagram size={20} />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="social-btn twitter" aria-label="Twitter">
                          <Twitter size={20} />
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Tax + CR */}
                  <div className="credentials">
                    <div className="cred-item">
                      <strong>Tax ID</strong>
                      <span>310448142800003</span>
                    </div>
                    <div className="cred-item">
                      <strong>CR</strong>
                      <span>1010601919</span>
                    </div>

                    <img src="/images/saudilogo.avif" alt="Saudi Arabia" className="saudi-logo" />
                  </div>
                </div>
              </div>

              {/* CENTER: QUICK LINKS */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services">
                  <h4 className="widget-title">Quick Links</h4>

                  {/* ✅ Dotted border removed from links */}
                  <ul className="footer-links no-borders">
                    <li>
                      <a href="/en/home">
                        <span className="link-icon">›</span>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="/en/about">
                        <span className="link-icon">›</span>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="/en/services">
                        <span className="link-icon">›</span>
                        Services
                      </a>
                    </li>
                    <li>
                      <a href="/en/portfolio">
                        <span className="link-icon">›</span>
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a href="/policy">
                        <span className="link-icon">›</span>
                        Exchange & Return Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT: CONTACT US */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-contact-col">

                <div className="widget widget_address_outer">
                  <h4 className="widget-title">Contact Us</h4>

                  <ul className="contact-list">
                    <li className="contact-item">
                      <div className="icon-wrap whatsapp">
                        <MessageCircle size={20} />
                      </div>
                      <div className="contact-info">
                        <span className="label">WhatsApp</span>
                        <a
                          href="https://wa.me/966539771718"
                          target="_blank"
                          rel="noreferrer"
                          className="contact-link"
                        >
                          +966 539 771 718
                        </a>
                      </div>
                    </li>

                    <li className="contact-item">
                      <div className="icon-wrap mobile">
                        <Smartphone size={20} />
                      </div>
                      <div className="contact-info">
                        <span className="label">Mobile</span>
                        <a href="tel:+966539774020" className="contact-link">
                          +966 539 774 020
                        </a>
                      </div>
                    </li>

                    <li className="contact-item">
                      <div className="icon-wrap phone">
                        <Phone size={20} />
                      </div>
                      <div className="contact-info">
                        <span className="label">Phone</span>
                        <a href="tel:+966539771718" className="contact-link">
                          +966 539 771 718
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="footer-bottom overlay-wraper">
          <div className="overlay-main" />
          <div className="container">
            <div className="footer-bottom-content">
              <p className="copyright">© 2025 Specialist Business Company. All rights reserved.</p>
              <p className="dev-credit">
                Designed & Developed with <span className="heart">❤</span> by{" "}
                <a href="#" className="dev-link">
                  Your Company
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* STYLES */}
        <style jsx>{`
          /* eslint-disable */
          .site-footer {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #e0e0e0;
          }

          .footer-contact-col {
  display: flex;
  justify-content: flex-start;

}

          .footer-top {
            padding: 60px 0 40px;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .col-lg-4,
          .col-md-6,
          .col-sm-6,
          .col-md-12,
          .col-sm-12 {
            padding: 0 15px;
            margin-bottom: 30px;
          }

          .col-lg-4 {
            flex: 0 0 33.333%;
            max-width: 33.333%;
          }

          .col-md-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }

          /* Logo */
          .footer-logo {
            margin-bottom: 20px;
          }

          .footer-logo img {
            height: 60px;
            width: 60px;
            background: white;
            padding: 8px;
            border-radius: 50%;
            box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
          }

          .widget-title {
            color: #ffffff;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 20px;
            position: relative;
            padding-bottom: 12px;
          }

          .widget-title::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(90deg, #ff6b35 0%, #ff8c42 100%);
            border-radius: 2px;
          }

          .footer-description {
            line-height: 1.8;
            color: #b0b0b0;
            margin-bottom: 25px;
          }

          /* Social Icons */
          .social-section {
            margin-top: 25px;
          }

          .social-title {
            color: #ffffff;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 15px;
          }

          .social-icons {
            display: flex;
            gap: 12px;
            padding: 0;
            margin: 0;
            list-style: none;
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
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }

          .social-btn::before {
            content: "";
            position: absolute;
            inset: 0;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transition: transform 0.3s ease;
            z-index: 0;
          }

          .social-btn:hover::before {
            transform: scale(1.2);
          }

          .social-btn svg {
            position: relative;
            z-index: 1;
          }

          .facebook {
            background: linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%);
            box-shadow: 0 4px 15px rgba(24, 119, 242, 0.3);
          }

          .youtube {
            background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
            box-shadow: 0 4px 15px rgba(255, 0, 0, 0.3);
          }

          .instagram {
            background: linear-gradient(135deg, #e1306c 0%, #fd1d1d 50%, #f77737 100%);
            box-shadow: 0 4px 15px rgba(225, 48, 108, 0.3);
          }

          .twitter {
            background: linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%);
            box-shadow: 0 4px 15px rgba(29, 161, 242, 0.3);
          }

          .social-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(255, 107, 53, 0.4);
          }

          /* Footer Links */
          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .footer-links li {
            margin-bottom: 12px;
            /* ❌ If you had dotted border from theme, this will override it */
            border: none !important;
          }

          .footer-links.no-borders li,
          .footer-links.no-borders a {
            border: none !important;
            background: transparent !important;
          }

          .footer-links a {
            color: #b0b0b0;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            font-weight: 500;
            /* ✅ force remove any dotted underline/border coming from global css */
            border-bottom: none !important;
            outline: none !important;
          }

          .footer-links a:hover {
            color: #ff6b35;
            padding-left: 8px;
          }

          .link-icon {
            color: #ff6b35;
            font-size: 22px;
            font-weight: bold;
            transition: transform 0.3s ease;
          }

          .footer-links a:hover .link-icon {
            transform: translateX(4px);
          }

          /* ✅ Contact List - RIGHT aligned (desktop) */
          .contact-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column; /* ✅ stack items for clean alignment */
            gap: 14px;
          }

          .contact-right {
            align-items: flex-end; /* ✅ whole list to the right side */
          }



        /* ✅ Each row stays aligned (icon + text) */
.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-start;
}

          .icon-wrap {
            width: 46px;
            height: 46px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          }

          .whatsapp {
            background: linear-gradient(135deg, #25d366 0%, #128c7e 100%);
          }

          .mobile {
            background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
          }

          .phone {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }

          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
            text-align: right; /* ✅ label + number right aligned */
            align-items: flex-end; /* ✅ keep text on right edge */
          }

          .label {
            font-size: 12px;
            color: #888;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .contact-link {
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: color 0.3s ease;
            white-space: nowrap; /* ✅ numbers break nahi honge */
          }

          .contact-link:hover {
            color: #ff6b35;
          }

          /* Credentials */
          .credentials {
            margin-top: 25px;
            padding: 20px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            display: flex;
            gap: 20px;
            align-items: center;
            flex-wrap: wrap;
          }

          .cred-item {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }

          .cred-item strong {
            color: #ff6b35;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }

          .cred-item span {
            color: #ffffff;
            font-weight: 600;
            font-size: 14px;
          }

          .saudi-logo {
            height: 40px;
            margin-left: auto;
          }

          /* Footer Bottom */
          .footer-bottom {
            padding: 25px 0;
            background: rgba(0, 0, 0, 0.3);
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .footer-bottom-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
          }

          .copyright,
          .dev-credit {
            margin: 0;
            color: #b0b0b0;
            font-size: 14px;
          }

          .heart {
            color: #ff6b35;
            animation: heartbeat 1.5s ease-in-out infinite;
          }

          @keyframes heartbeat {
            0%,
            100% {
              transform: scale(1);
            }
            25% {
              transform: scale(1.2);
            }
            50% {
              transform: scale(1);
            }
          }

          .dev-link {
            color: #ff6b35;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
          }

          .dev-link:hover {
            color: #ff8c42;
          }

          /* Responsive */
          /* ✅ On tablet/mobile center it */
@media (max-width: 992px) {
  .footer-contact-col {
    justify-content: center;
  }
  .footer-contact-col .widget_address_outer {
    margin-left: 0;
    text-align: center;
  }
  .contact-item {
    justify-content: center;
  }
}
  
          @media (max-width: 992px) {
            .col-lg-4 {
              flex: 0 0 100%;
              max-width: 100%;
            }

            .footer-top {
              padding: 40px 0 30px;
            }

            .widget {
              text-align: center;
            }

            .widget-title::after {
              left: 50%;
              transform: translateX(-50%);
            }

            .social-icons {
              justify-content: center;
            }

            .footer-links {
              display: flex;
              flex-direction: column;
              align-items: center;
            }

            /* ✅ On mobile: contact list center (better UX) */
            .contact-right {
              align-items: center;
            }
            .contact-item {
              justify-content: center;
            }
            .contact-info {
              text-align: center;
              align-items: center;
            }

            .credentials {
              justify-content: center;
            }

            .saudi-logo {
              margin-left: 0;
            }

            .footer-bottom-content {
              flex-direction: column;
              text-align: center;
            }
          }

          @media (max-width: 768px) {
            .col-md-6 {
              flex: 0 0 100%;
              max-width: 100%;
            }

            .footer-logo img {
              height: 50px;
              width: 50px;
            }

            .widget-title {
              font-size: 18px;
            }
          }
          /* eslint-enable */
        `}</style>
      </footer>
    </div>
  );
};

export default Footer;

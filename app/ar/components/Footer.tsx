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
  // Social button (lucide) — same feel
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

  // ✅ Strong wrapper to stop theme floats/spacing issues
  const contactWrap: CSSProperties = {
    width: "100%",
    display: "block",
    clear: "both",
  };

  const contactUl: CSSProperties = {
    width: "100%",
    margin: 0,
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 12,
  };

  const contactLi: CSSProperties = {
    width: "100%",
    margin: 0,
    padding: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 12,
    direction: "ltr", // keep +966 correct
  };

  const contactLink: CSSProperties = {
    color: "white",
    display: "inline-block",
    whiteSpace: "nowrap",
  };

  return (
    <div dir="rtl">
      {/* FOOTER START */}
      <footer className="site-footer footer-large footer-dark footer-wide">
        {/* FOOTER TOP */}
        <div className="footer-top overlay-wraper">
          <div className="overlay-main" />

          <div className="container">
            <div className="row">
              {/* COMPANY - RIGHT SIDE */}
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="widget widget_about text-right">
                  <h4 className="widget-title">شركة الأعمال المتخصصة</h4>

                  <p className="max-w400" style={{ marginLeft: "auto" }}>
                    تختص شركة الأعمال المتخصصة بجميع المواد الكهربائية، وتوفر أفضل
                    جودة بأقل سعر ممكن. نقدم مجموعة واسعة من المنتجات الكهربائية
                    المبتكرة للشركات والمؤسسات والأفراد.
                  </p>

                  {/* SOCIAL ICONS (lucide) start from RIGHT */}
                  <ul
                    className="social-icons mt-social-links"
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: 10,
                      marginTop: 14,
                      padding: 0,
                      listStyle: "none",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <li>
                      <a href="#" title="فيسبوك" style={socialBtnStyle}>
                        <Facebook size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="يوتيوب" style={socialBtnStyle}>
                        <Youtube size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="إنستغرام" style={socialBtnStyle}>
                        <Instagram size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="إكس" style={socialBtnStyle}>
                        <Twitter size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="سناب شات" style={socialBtnStyle}>
                        <Ghost size={18} />
                      </a>
                    </li>
                    <li>
                      <a href="#" title="تيك توك" style={socialBtnStyle}>
                        <Music size={18} />
                      </a>
                    </li>
                  </ul>

                  {/* TAX + CR + SAUDI LOGO */}
                  <div style={{ marginTop: 18, textAlign: "right" }}>
                    <div
                      style={{
                        display: "flex",
                        gap: 24,
                        justifyContent: "flex-end",
                        flexWrap: "wrap",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 600 }}>الرقم الضريبي</div>
                        <div>310448142800003</div>
                      </div>

                      <div>
                        <div style={{ fontWeight: 600 }}>السجل التجاري</div>
                        <div>1010601919</div>
                      </div>

                      <div>
                        <img
                          src="/images/saudi-logo.AVIF"
                          alt="Saudi Arabia"
                          style={{ height: 36, width: "auto", marginTop: 6 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* IMPORTANT LINKS - CENTER */}
              <div className="col-lg-4 col-md-6 col-sm-6 footer-col-3">
                <div className="widget widget_services inline-links text-center">
                  <h4 className="widget-title">روابط مهمة</h4>
                  <ul>
                    <li>
                      <a href="/about">من نحن؟</a>
                    </li>
                    <li>
                      <a href="/policy">سياسة الاستبدال والاسترجاع</a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* CONTACT US - LEFT SIDE */}
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div
                  className="widget widget_address_outer"
                  style={{ textAlign: "left" }}
                >
                  <h4
                    className="widget-title"
                    style={{ textAlign: "left", marginBottom: 14 }}
                  >
                    تواصل معنا
                  </h4>

                  <div style={contactWrap}>
                    <ul className="widget_address" style={contactUl}>
                      <li style={contactLi}>
                        <span className="iconWrap">
                          <MessageCircle size={18} />
                        </span>
                        <a
                          href="https://wa.me/966539771718"
                          target="_blank"
                          rel="noreferrer"
                          style={contactLink}
                        >
                          +966539771718
                        </a>
                      </li>

                      <li style={contactLi}>
                        <span className="iconWrap">
                          <Smartphone size={18} />
                        </span>
                        <a href="tel:+966539774020" style={contactLink}>
                          +966539774020
                        </a>
                      </li>

                      <li style={contactLi}>
                        <span className="iconWrap">
                          <Phone size={17} />
                        </span>
                        <a href="tel:+966539771718" style={contactLink}>
                          +966539771718
                        </a>
                      </li>

                      <li style={contactLi}>
                        <span className="iconWrap">
                          <Mail size={17} />
                        </span>
                        <a href="mailto:a22@live.at" style={contactLink}>
                          a22@live.at
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* PAYMENT METHODS (white pills like screenshot) */}
            <div className="paymentRow">
              <div className="payPill">
                <img src="/images/cod_mini.AVIF" alt="الدفع عند الاستلام" className="payImg" />
              </div>
              <div className="payPill">
                <img src="/images/apple_pay_mini.AVIF" alt="Apple Pay" className="payImg" />
              </div>
              <div className="payPill">
                <img src="/images/credit_card_mini.AVIF" alt="Visa" className="payImg" />
              </div>
              <div className="payPill">
                <img src="/images/mada_mini.AVIF" alt="Mastercard" className="payImg" />
              </div>
              <div className="payPill">
                <img src="/images/bank_mini.AVIF" alt="مدى" className="payImg" />
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
                  شركة الأعمال المتخصصة - جميع الحقوق محفوظة | 2025
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Local styles (same idea as English version) */}
        <style jsx>{`
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
        `}</style>
      </footer>
      {/* FOOTER END */}
    </div>
  );
};

export default Footer;

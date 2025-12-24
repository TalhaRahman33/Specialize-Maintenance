"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

/* ✅ WhatsApp Config */
const WHATSAPP_NUMBER = "966576150857";
const WHATSAPP_TEXT = "مرحبًا، أود الاستفسار عن خدماتكم.";

const Mission = () => {
  const goWhatsapp = () => {
    const text = encodeURIComponent(WHATSAPP_TEXT);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div dir="rtl">
      {/* OUR MISSION START */}
      <div
        className="section-full mobile-page-padding mission-outer-section p-t80 p-b30 bg-gray bg-no-repeat bg-right-center"
        style={{
          backgroundImage: "url(/images/left-men.png), url(/images/bg-4.png)",
        }}
      >
        <div className="section-content">
          <div className="container">
            {/* TITLE START */}
            <div className="section-head">
              <div className="mt-separator-outer separator-center">
                <div className="mt-separator">
                  <h2 className="text-uppercase sep-line-one">
                    <span className="font-weight-300 site-text-primary">رسالتنا</span>
                  </h2>
                </div>
              </div>
            </div>
            {/* TITLE END */}

            <div className="row">
              {/* CONTACT FORM (LEFT) */}
              <div className="col-lg-4 col-md-12 order-lg-1 order-3">
                <div className="contact-home1-left site-bg-dark p-a30 m-b0 text-right">
                  <h3 className="text-white m-t0">
                    <span className="font-weight-100">تواصل</span> معنا
                  </h3>

                  <form
                    className="cons-contact-form2 form-transparent rtlForm"
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("ارسلنا النموذج لاحقًا عبر API في Next.js");
                    }}
                  >
                    <div className="input input-animate">
                      {/* <label htmlFor="name">الاسم</label> */}
                      <input type="text" name="username" id="name" placeholder="الاسم" />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      {/* <label htmlFor="email">البريد الإلكتروني</label> */}
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="البريد الإلكتروني"
                      />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      {/* <label htmlFor="Phone">رقم الهاتف</label> */}
                      <input type="text" name="phone" id="Phone" placeholder="رقم الهاتف" />
                      <span className="spin" />
                    </div>

                    <div className="input input-animate">
                      {/* <label htmlFor="message">الرسالة</label> */}
                      <textarea
                        name="message"
                        id="message"
                        placeholder="اكتب رسالتك هنا..."
                      />
                      <span className="spin" />
                    </div>

                    <div className="text-center p-t10">
                      <button type="submit" className="site-button btn-effect">
                        إرسال الآن
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* MID IMAGE (CENTER) */}
              <div className="col-lg-4 col-md-6 order-lg-2 order-2">
                <div className="mission-mid m-b30 missionImageWrap">
                  <Image
                    src="/images/mission.jpg"
                    alt="رسالتنا"
                    fill
                    sizes="(max-width: 992px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>

              {/* SERVICES BOX (RIGHT) */}
              <div className="col-lg-4 col-md-6 order-lg-3 order-1">
                <div
                  className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left text-right"
                  style={{ backgroundImage: "url(/images/bg-site.png)" }}
                >
                  <h3 className="m-t0">
                    <span className="font-weight-100">مجالات العمل</span>
                    <br /> ما الذي نقدمه
                  </h3>

                  <p>
                    تتوفر نصوص عديدة، ولكن معظمها تعرض للتعديل أو التغيير عبر السنوات،
                    أحيانًا بشكل غير مقصود.
                  </p>

                  <ul className="list-angle-right anchor-line">
                    <li>
                      <Link href="/ar/services">إدارة مشاريع الإنشاء</Link>
                    </li>
                    <li>
                      <Link href="/ar/services">خدمات ما قبل الإنشاء</Link>
                    </li>
                    <li>
                      <Link href="/ar/services">إدارة العقود</Link>
                    </li>
                    <li>
                      <Link href="/ar/services">التنفيذ</Link>
                    </li>
                    <li>
                      <Link href="/ar/services">استشارات LEED</Link>
                    </li>
                  </ul>

                  {/* ✅ SAME BUTTON STYLE AS YOUR OTHER FILE */}
                  <div className="text-left">
                    <button
                      type="button"
                      onClick={goWhatsapp}
                      className="site-button-link"
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                        fontWeight: 600,
                      }}
                      data-hover="تواصل عبر واتساب"
                    >
                      تواصل عبر واتساب
                      {/* ✅ Use FAB for FontAwesome 5/6 */}
                      <i className="fab fa-whatsapp arrow-animation waIcon" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BACKGROUND TITLE */}
        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>الرسالة</strong>
        </div>

        <style jsx>{`
          .missionImageWrap {
            position: relative;
            width: 100%;
            height: 430px;
            overflow: hidden;
          }
          @media (max-width: 768px) {
            .missionImageWrap {
              height: 280px;
            }
          }

          /* RTL FIXES for Contact Form */
          .rtlForm,
          .rtlForm input,
          .rtlForm textarea {
            direction: rtl;
            text-align: right;
          }
          .rtlForm label {
            right: 0;
            left: auto;
            text-align: right;
            width: 100%;
            display: block;
          }
          .rtlForm input::placeholder,
          .rtlForm textarea::placeholder {
            text-align: right;
            direction: rtl;
            opacity: 0.85;
          }

          /* ✅ WhatsApp icon spacing for RTL */
          .waIcon {
            margin-right: 0;
            margin-left: 8px;
          }
        `}</style>
      </div>
      {/* OUR MISSION END */}
    </div>
  );
};

export default Mission;

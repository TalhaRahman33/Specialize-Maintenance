"use client";

import React, { useMemo, useState } from "react";

type Service = {
  id: number;
  img: string;
  title: string;
  desc: string;
  details: string[];
};

// ✅ WhatsApp Settings (Arabic)
const WHATSAPP_NUMBER = "966576150857"; // change if needed
const WHATSAPP_DEFAULT_TEXT = "مرحباً! أريد الاستفسار عن خدماتكم.";

const services: Service[] = [
  {
    id: 1,
    img: "/images/plumbing.webp",
    title: "أعمال السباكة",
    desc:
      "تنفيذ وصيانة أعمال السباكة من تمديدات المياه، إصلاح التسريبات، وتركيب الخزانات بجودة عالية وضمان كامل.",
    details: [
      "تركيب تمديدات سباكة جديدة (مطابخ، حمامات، خارجية).",
      "كشف وإصلاح التسريبات مع عزل وإغلاق محكم.",
      "تركيب وصيانة خزانات المياه.",
      "استبدال القطع (خلاطات، محابس، صمامات، مصارف).",
      "فحص الضغط والتأكد من سلامة التشغيل بعد الانتهاء.",
    ],
  },
  {
    id: 2,
    img: "/images/painting.webp",
    title: "دهانات الجدران والأسقف",
    desc:
      "خدمات دهان احترافية للجدران والأسقف باستخدام مواد عالية الجودة لنتائج تدوم طويلاً ومظهر أنيق.",
    details: [
      "تجهيز السطح (صنفرة، معجون، معالجة التشققات).",
      "برايمر + عدة طبقات للحصول على ثبات أعلى.",
      "دهانات داخلية وخارجية مقاومة للعوامل الجوية.",
      "اقتراح الألوان وتنفيذ حواف نظيفة ودقيقة.",
      "تنظيف نهائي مع لمسات تشطيب بعد الانتهاء.",
    ],
  },
  {
    id: 3,
    img: "/images/electrician.avif",
    title: "الأعمال الكهربائية",
    desc:
      "تنفيذ وصيانة الأعمال الكهربائية من تمديدات، إصلاح الأعطال، والترقيات مع الالتزام بمعايير السلامة.",
    details: [
      "تمديدات وإعادة تمديد وفق معايير السلامة.",
      "تركيب/صيانة مفاتيح، أفياش، قواطع كهربائية.",
      "تشخيص الأعطال وتوزيع الأحمال بشكل صحيح.",
      "تركيب الإنارة الداخلية والخارجية.",
      "فحص التأريض والعزل للتأكد من الأمان.",
    ],
  },
  {
    id: 4,
    img: "/images/floor.avif",
    title: "تركيب البلاط",
    desc:
      "تنفيذ أعمال تركيب البلاط بدقة عالية وتشطيب مثالي للأرضيات في المنازل والمشاريع التجارية.",
    details: [
      "تسوية الأرضية وتجهيز القاعدة قبل التركيب.",
      "تخطيط توزيع البلاط للحصول على شكل متناسق.",
      "استخدام لاصق قوي مع مسافات دقيقة للفواصل.",
      "تنفيذ الجراوت والتنظيف والتلميع النهائي.",
      "إصلاح واستبدال البلاط التالف عند الحاجة.",
    ],
  },
  {
    id: 5,
    img: "/images/gypsum.avif",
    title: "الجبس بورد",
    desc:
      "تنفيذ أعمال الجبس بورد للأسقف والجدران بتصاميم عصرية وتشطيب ناعم يناسب جميع المساحات.",
    details: [
      "أسقف مستعارة بتصاميم بسيطة أو عصرية.",
      "قواطع وكسوة جدارية مع هيكل قوي.",
      "تشطيب فواصل ناعم ومعجون احترافي.",
      "تنسيق فتحات الإضاءة (سبوت/LED) بدقة.",
      "خيارات مقاومة للرطوبة حسب الموقع.",
    ],
  },
  {
    id: 6,
    img: "/images/interiorD.avif",
    title: "التصميم الداخلي",
    desc:
      "خدمات تصميم داخلي متكاملة تشمل التخطيط، اختيار المواد، والألوان بما يناسب ذوق العميل.",
    details: [
      "تحديد الفكرة/الثيم حسب ذوق العميل.",
      "اختيار مواد وألوان وإضاءة مناسبة.",
      "توزيع الأثاث وتحسين استغلال المساحة.",
      "Moodboard وتوجيه تصميمي واضح.",
      "إرشاد للتنفيذ للحصول على نتيجة مرتبة.",
    ],
  },
  {
    id: 7,
    img: "/images/Layout.jpg",
    title: "تخطيط المساحات",
    desc:
      "تخطيط المساحات الداخلية باستخدام مخططات ثنائية وثلاثية الأبعاد لتحسين الاستخدام والوظيفة.",
    details: [
      "مخطط 2D للقياسات وتوزيع العناصر.",
      "تصور 3D لتوضيح الفكرة بشكل أفضل.",
      "تحسين حركة الاستخدام داخل المكان.",
      "تخطيط تجديدات بشكل عملي وواضح.",
      "تعديلات حسب ملاحظات العميل.",
    ],
  },
  {
    id: 8,
    img: "/images/CCTV.webp",
    title: "تركيب كاميرات المراقبة",
    desc:
      "تركيب أنظمة كاميرات المراقبة مع التخطيط الصحيح، التوصيل، والبرمجة لضمان أعلى مستوى أمان.",
    details: [
      "تخطيط أماكن الكاميرات لضمان أفضل تغطية.",
      "تمديدات وتوصيلات بشكل مرتب واحترافي.",
      "إعداد جهاز التسجيل NVR/DVR وضبط الإعدادات.",
      "ربط المشاهدة على الجوال مع حماية الدخول.",
      "اختبار شامل مع شرح الاستخدام للعميل.",
    ],
  },
  {
    id: 9,
    img: "/images/welding.webp",
    title: "أعمال اللحام",
    desc:
      "تنفيذ أعمال اللحام للأبواب، الهياكل المعدنية، والمشغولات الحديدية بجودة وقوة عالية.",
    details: [
      "تصنيع وصيانة الأبواب والشبابيك والبوابات.",
      "تنفيذ هياكل معدنية وأعمال حسب الطلب.",
      "لحامات قوية مع تشطيب نظيف.",
      "لحام موقعي للإصلاحات السريعة.",
      "توصيات ضد الصدأ والحماية بعد العمل.",
    ],
  },
];

export default function SerAr() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = useMemo<Service | undefined>(
    () => services.find((x) => x.id === selectedId),
    [selectedId]
  );

  const openDialog = (service: Service) => {
    setSelectedId(service.id);
    setOpen(true);
  };

  const closeDialog = () => setOpen(false);

  // ✅ One function used for BOTH card + dialog buttons
  const goWhatsapp = (serviceTitle?: string) => {
    const serviceName = serviceTitle ? `الخدمة: ${serviceTitle}` : "استفسار خدمة";
    const text = encodeURIComponent(`${WHATSAPP_DEFAULT_TEXT}\n${serviceName}`);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div dir="rtl">
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{ backgroundImage: "url(/images/bg-6.png)" }}
          >
            <div className="container">
              <div className="section-head text-white text-right">
                <div className="mt-separator-outer separator-right">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">خدماتنا</span>
                    </h2>
                  </div>
                </div>
                <h3>نقدم خدمات متكاملة بجودة عالية وضمان للمشاريع السكنية والتجارية.</h3>
              </div>
            </div>
          </div>

          <div className="services-half-bottom">
            <div className="container">
              <div className="services-grid">
                {services.map((s) => (
                  <div
                    key={s.id}
                    className="service-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => openDialog(s)}
                    onKeyDown={(e) => e.key === "Enter" && openDialog(s)}
                    aria-label={`فتح تفاصيل ${s.title}`}
                  >
                    <div className="card-inner bg-gray">
                      <div className="card-media">
                        <img src={s.img} alt={s.title} className="card-img" loading="lazy" />
                        <div className="media-overlay" />
                      </div>

                      <div className="card-content">
                        <h4 className="title-clamp">{s.title}</h4>
                        <p className="desc-clamp">{s.desc}</p>

                        {/* ✅ CARD BUTTON */}
                        <div className="card-actions">
                          <button
                            type="button"
                            className="btn-primary btn-small"
                            onClick={(e) => {
                              e.stopPropagation();
                              goWhatsapp(s.title);
                            }}
                            aria-label={`واتساب للاستفسار عن ${s.title}`}
                          >
                            تواصل معنا (واتساب)
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Dialog */}
              {open && selected && (
                <div className="dialog-backdrop" onClick={closeDialog} role="presentation">
                  <div
                    className="dialog"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="serviceDialogTitleAr"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="dialog-close" onClick={closeDialog} aria-label="إغلاق">
                      ✕
                    </button>

                    <div className="dialog-media">
                      <img src={selected.img} alt={selected.title} className="dialog-img" />
                    </div>

                    <div className="dialog-body">
                      <h3 id="serviceDialogTitleAr" className="dialog-title">
                        {selected.title}
                      </h3>

                      <p className="dialog-desc">{selected.desc}</p>

                      <div className="dialog-section">
                        <h4 className="dialog-subtitle">ماذا نقدم</h4>
                        <ul className="dialog-list">
                          {selected.details.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
                      </div>

                      {/* ✅ DIALOG BUTTON */}
                      <div className="dialog-actions">
                        <button
                          type="button"
                          className="btn-primary"
                          onClick={() => goWhatsapp(selected.title)}
                        >
                          تواصل معنا (واتساب)
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <style jsx>{`
                .services-grid {
                  display: grid;
                  gap: 22px;
                  grid-template-columns: 1fr;
                }
                @media (min-width: 576px) {
                  .services-grid {
                    grid-template-columns: repeat(2, 1fr);
                  }
                }
                @media (min-width: 992px) {
                  .services-grid {
                    grid-template-columns: repeat(3, 1fr);
                  }
                }

                .service-card {
                  cursor: pointer;
                  height: 100%;
                }

                .card-inner {
                  height: 100%;
                  border-radius: 10px;
                  overflow: hidden;
                  display: flex;
                  flex-direction: column;
                  transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .service-card:hover .card-inner {
                  transform: translateY(-6px);
                  box-shadow: 0 16px 35px rgba(0, 0, 0, 0.25);
                }

                /* ✅ EXACT MATCH TO ENGLISH */
                .card-media {
                  position: relative;
                  width: 100%;
                  height: 290px; /* ✅ SAME AS ENGLISH */
                  overflow: hidden;
                }

                .card-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  transform: scale(1);
                  transition: transform 0.35s ease;
                  display: block;
                }

                .service-card:hover .card-img {
                  transform: scale(1.08);
                }

                .media-overlay {
                  position: absolute;
                  inset: 0;
                  background: linear-gradient(
                    to bottom,
                    rgba(0, 0, 0, 0.12),
                    rgba(0, 0, 0, 0.45)
                  );
                  opacity: 0.9;
                  transition: opacity 0.35s ease;
                  pointer-events: none;
                }

                .service-card:hover .media-overlay {
                  opacity: 1;
                }

                /* ✅ IMPORTANT: SAME AS ENGLISH (flex:1 + height:auto) */
                .card-content {
                  padding: 16px 18px 18px 18px;
                  display: flex;
                  flex-direction: column;
                  flex: 1;
                  height: auto; /* ✅ removes extra space */
                  text-align: right;
                }

                .title-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.35;
                  min-height: 52px;
                  margin-bottom: 12px;
                }

                /* ✅ SAME AS ENGLISH */
                .desc-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.8;
                  opacity: 0.95;
                  margin: 0;
                }

                .card-actions {
                  margin-top: auto;
                  padding-top: 12px;
                }

                .btn-primary {
                  border: 0;
                  padding: 12px 16px;
                  border-radius: 10px;
                  cursor: pointer;
                  background: var(--site-primary-color, #f5a623);
                  color: #111;
                  font-weight: 700;
                }

                .btn-small {
                  padding: 10px 14px;
                  font-size: 14px;
                  border-radius: 10px;
                }

                /* Dialog (RTL) */
                .dialog-backdrop {
                  position: fixed;
                  inset: 0;
                  background: rgba(0, 0, 0, 0.65);
                  z-index: 9999;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  padding: 18px;
                }

                .dialog {
                  width: min(980px, 100%);
                  background: #fff;
                  border-radius: 12px;
                  overflow: hidden;
                  position: relative;
                  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
                  display: grid;
                  grid-template-columns: 1.1fr 1fr;
                  direction: rtl;
                }

                @media (max-width: 900px) {
                  .dialog {
                    grid-template-columns: 1fr;
                  }
                }

                .dialog-close {
                  position: absolute;
                  top: 10px;
                  left: 10px;
                  width: 38px;
                  height: 38px;
                  border-radius: 10px;
                  border: 0;
                  background: rgba(0, 0, 0, 0.55);
                  color: #fff;
                  cursor: pointer;
                  font-size: 16px;
                  z-index: 2;
                }

                .dialog-media {
                  background: #111;
                  min-height: 320px;
                }

                .dialog-img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  display: block;
                }

                .dialog-body {
                  padding: 22px 22px 18px 22px;
                  text-align: right;
                }

                .dialog-title {
                  margin: 0 0 10px 0;
                  font-size: 22px;
                  line-height: 1.2;
                }

                .dialog-desc {
                  margin: 0 0 14px 0;
                  line-height: 1.9;
                  opacity: 0.9;
                }

                .dialog-subtitle {
                  margin: 0 0 10px 0;
                  font-size: 16px;
                }

                .dialog-list {
                  margin: 0 0 16px 0;
                  padding-right: 18px;
                  padding-left: 0;
                  line-height: 1.9;
                }

                .dialog-actions {
                  display: flex;
                  gap: 10px;
                  flex-wrap: wrap;
                  margin-top: 12px;
                }
              `}</style>
            </div>
          </div>
        </div>

        <div className="hilite-title text-right p-r50 text-uppercase text-pop-up-top">
          <strong>الخدمات</strong>
        </div>
      </div>
    </div>
  );
}

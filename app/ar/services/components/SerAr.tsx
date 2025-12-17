"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
    FaTools,
    FaPaintRoller,
    FaBolt,
    FaThLarge,
    FaBorderStyle,
    FaCouch,
    FaDraftingCompass,
    FaVideo,
    FaHammer,
} from "react-icons/fa";


const services = [
    {
        id: 1,
        number: "1",
        clientUrl: "https://portal.maarif.sa/",
        icon: FaTools,
        title: "أعمال السباكة",
        desc:
            "تنفيذ وصيانة أعمال السباكة من تمديدات المياه، إصلاح التسريبات، وتركيب الخزانات بجودة عالية وضمان كامل.",
        contact: "+966576150857",
    },
    {
        id: 2,
        number: "2",
        clientUrl: "https://www.iks.edu.sa/",
        icon: FaPaintRoller,
        title: "دهانات الجدران والأسقف",
        desc:
            "خدمات دهان احترافية للجدران والأسقف باستخدام مواد عالية الجودة لنتائج تدوم طويلاً ومظهر أنيق.",
        contact: "",
    },
    {
        id: 3,
        number: "3",
        clientUrl: "https://daffah.sa/",
        icon: FaBolt,
        title: "الأعمال الكهربائية",
        desc:
            "تنفيذ وصيانة الأعمال الكهربائية من تمديدات، إصلاح الأعطال، والترقيات مع الالتزام بمعايير السلامة.",
        contact: "+966550196380",
    },
    {
        id: 4,
        number: "4",
        clientUrl: "https://menu.broastalfarooj.com/",
        icon: FaThLarge,
        title: "تركيب البلاط",
        desc:
            "تنفيذ أعمال تركيب البلاط بدقة عالية وتشطيب مثالي للأرضيات في المنازل والمشاريع التجارية.",
        contact: "البريد حسب النطاق",
    },
    {
        id: 5,
        number: "5",
        clientUrl: "",
        icon: FaBorderStyle,
        title: "الجبس بورد",
        desc:
            "تنفيذ أعمال الجبس بورد للأسقف والجدران بتصاميم عصرية وتشطيب ناعم يناسب جميع المساحات.",
        contact: "",
    },
    {
        id: 6,
        number: "6",
        clientUrl: "",
        icon: FaCouch,
        title: "التصميم الداخلي",
        desc:
            "خدمات تصميم داخلي متكاملة تشمل التخطيط، اختيار المواد، والألوان بما يناسب ذوق العميل.",
        contact: "",
    },
    {
        id: 7,
        number: "7",
        clientUrl: "",
        icon: FaDraftingCompass,
        title: "تخطيط المساحات",
        desc:
            "تخطيط المساحات الداخلية باستخدام مخططات ثنائية وثلاثية الأبعاد لتحسين الاستخدام والوظيفة.",
        contact: "",
    },
    {
        id: 8,
        number: "8",
        clientUrl: "",
        icon: FaVideo,
        title: "تركيب كاميرات المراقبة",
        desc:
            "تركيب أنظمة كاميرات المراقبة مع التخطيط الصحيح، التوصيل، والبرمجة لضمان أعلى مستوى أمان.",
        contact: "",
    },
    {
        id: 9,
        number: "9",
        clientUrl: "",
        icon: FaHammer,
        title: "أعمال اللحام",
        desc:
            "تنفيذ أعمال اللحام للأبواب، الهياكل المعدنية، والمشغولات الحديدية بجودة وقوة عالية.",
        contact: "",
    },
];


export default function SerAr() {
    const router = useRouter();
    const goServices = () => router.push("/ar/services");

    return (
        <div dir="rtl">
            <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
                <div className="section-content">
                    <div
                        className="Service-half-top p-t80 site-bg-dark bg-moving"
                        style={{ backgroundImage: "url(/images/bg-6.png)" }}
                    >
                        <div className="container">
                            <div className="section-head text-white">
                                <div className="mt-separator-outer separator-right">
                                    <div className="mt-separator">
                                        <h2 className="text-white text-uppercase sep-line-one">
                                            <span className="font-weight-300 site-text-primary">
                                                خدماتنا
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                                <h3>
                                    نقدم خدمات متكاملة بجودة عالية وضمان للمشاريع السكنية والتجارية.
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="services-half-bottom">
                        <div className="container">
                            <div className="services-grid">
                                {services.map((s) => (
                                    <div
                                        key={s.id}
                                        className="mt-icon-box-wraper m-b30 service-card"
                                        style={{ cursor: "pointer" }}
                                        onClick={goServices}
                                    >
                                        <div className="relative icon-count-2 bg-gray p-a30 p-tb50 card-inner">
                                            <span className="icon-count-number">{s.number}</span>

                                            <div className="icon-md inline-icon m-b15 site-text-primary">
                                                <span className="icon-cell">
                                                    <span className="service-icon">
                                                        <s.icon size={54} />
                                                    </span>

                                                </span>
                                            </div>

                                            <div className="icon-content content-flex">
                                                <h4 className="mt-tilte m-b15 title-clamp">{s.title}</h4>
                                                <p className="desc-clamp">{s.desc}</p>

                                                <div className="contact-line">
                                                    <strong>التواصل:</strong>{" "}
                                                    {s.contact ? s.contact : "—"}
                                                </div>

                                                {s.clientUrl ? (
                                                    <a
                                                        href={s.clientUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="client-link-bottom"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        {s.clientUrl.replace("https://", "").replace("http://", "")}
                                                    </a>
                                                ) : (
                                                    <span className="client-link-bottom muted">
                                                        العميل: غير متوفر
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* 🔹 SAME HEIGHT + RTL STYLES */}
                            <style jsx>{`
                .services-grid {
                  display: grid;
                  gap: 24px;
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
                @media (min-width: 1200px) {
                  .services-grid {
                    grid-template-columns: repeat(4, 1fr);
                  }
                }

                /* ✅ Move icon to LEFT in Arabic (RTL) */
.icon-md {
  display: flex;
  justify-content: flex-start; /* left side */
}

.icon-cell {
  margin-left: 0;
  margin-right: auto;
}

/* Optional: thora spacing text se */
.icon-md {
  margin-bottom: 20px;
}


.service-icon {
  color: var(--site-primary-color, #f5a623);
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.service-card:hover .service-icon {
  transform: scale(1.1);
  transition: 0.3s ease;
}


                .card-inner {
                  min-height: 430px;
                  display: flex;
                  flex-direction: column;
                  padding-top: 56px !important;
                  padding-bottom: 56px !important;
                }

                .content-flex {
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }

                .title-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 3;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  min-height: 72px;
                  line-height: 1.4;
                }

                .desc-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  min-height: 110px;
                  line-height: 1.7;
                }

                .contact-line {
                  margin-top: auto;
                  margin-bottom: 12px;
                  font-size: 14px;
                }

                .client-link-bottom {
                  font-size: 13px;
                  text-decoration: underline;
                }
                .client-link-bottom.muted {
                  opacity: 0.7;
                  text-decoration: none;
                }
              `}</style>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

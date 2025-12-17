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
    title: "Plumbing",
    desc:
      "Installation, repair, and maintenance of plumbing lines, fittings, water tanks, and leak fixing with guaranteed workmanship.",
    contact: "+966576150857",
  },
  {
    id: 2,
    number: "2",
    clientUrl: "https://www.iks.edu.sa/",
          icon: FaPaintRoller,
    title: "Wall & Roof Painting",
    desc:
      "Premium wall and roof painting using durable coatings for a clean finish, better protection, and long-lasting color.",
    contact: "",
  },
  {
    id: 3,
    number: "3",
    clientUrl: "https://daffah.sa/",
    icon: FaBolt,
    title: "Electrician",
    desc:
      "Safe electrical wiring, installations, troubleshooting, upgrades, and repairs handled by skilled technicians with guarantee.",
    contact: "+966550196380",
  },
  {
    id: 4,
    number: "4",
    clientUrl: "https://menu.broastalfarooj.com/",
    icon: FaThLarge,
    title: "Floor Tiling",
    desc:
      "Accurate floor tiling installation with clean leveling, strong bonding, and premium finishing for homes and commercial sites.",
    contact: "Email according to domain",
  },
  {
    id: 5,
    number: "5",
    clientUrl: "",
      icon: FaBorderStyle,
    title: "Gypsum Board",
    desc:
      "Gypsum board ceiling and wall installation with neat joints, smooth finishing, and design options for modern interiors.",
    contact: "",
  },
  {
    id: 6,
    number: "6",
    clientUrl: "",
   icon: FaCouch,
    title: "Interior Designing",
    desc:
      "Complete interior design solutions including concept, materials, colors, and layout to match your space and style.",
    contact: "",
  },
  {
    id: 7,
    number: "7",
    clientUrl: "",
 icon: FaDraftingCompass,
    title: "Layout Planning",
    desc:
      "2D/3D layout planning to optimize space usage, flow, and functionality for renovations and new interior work.",
    contact: "",
  },
  {
    id: 8,
    number: "8",
    clientUrl: "",
    icon: FaVideo,
    title: "CCTV Camera Installation",
    desc:
      "CCTV installation with proper camera placement, wiring, NVR/DVR setup, and secure configuration for reliable monitoring.",
    contact: "",
  },
  {
    id: 9,
    number: "9",
    clientUrl: "",
      icon: FaHammer,
    title: "Welding Services",
    desc:
      "Professional welding for gates, grills, frames, and metal fabrication with strong joints and clean finishing.",
    contact: "",
  },
];

export default function Ser() {
  const router = useRouter();
  const goServices = () => router.push("/en/services");

  return (
    <div>
      <div className="section-full mobile-page-padding our-service-wrap p-b50 square_shape2">
        <div className="section-content">
          <div
            className="Service-half-top p-t80 site-bg-dark bg-moving"
            style={{ backgroundImage: "url(/images/bg-6.png)" }}
          >
            <div className="container">
              <div className="section-head text-white">
                <div className="mt-separator-outer separator-left">
                  <div className="mt-separator">
                    <h2 className="text-white text-uppercase sep-line-one">
                      <span className="font-weight-300 site-text-primary">Our</span>{" "}
                      Services
                    </h2>
                  </div>
                </div>
                <h3>Guaranteed workmanship for residential and commercial projects.</h3>
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
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && goServices()}
                  >
                    <div className="relative icon-count-2 bg-gray p-a30 p-tb50 card-inner">
                      <span className="icon-count-number">{s.number}</span>

                      <div className="icon-md inline-icon m-b15 site-text-primary scale-in-center">
                        <span className="service-icon">
                                                        <s.icon size={54} />
                                                    </span>
                      </div>

                      <div className="icon-content content-flex">
                        <h4 className="mt-tilte m-b15 title-clamp">{s.title}</h4>

                        <p className="desc-clamp">{s.desc}</p>

                        <div className="contact-line">
                          <strong>Contact:</strong> {s.contact ? s.contact : "—"}
                        </div>

                        {/* ✅ Client link moved to bottom (Read More removed) */}
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
                          <span className="client-link-bottom muted">Client: N/A</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

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

  /* ✅ Same height + increased height for all cards */
  .service-card {
    height: 100%;
  }

  .card-inner {
    height: 100%;
    min-height: 430px; /* ✅ increase card height (adjust if needed: 410-480) */
    display: flex;
    flex-direction: column;
    padding-top: 56px !important; /* a bit more top spacing */
    padding-bottom: 56px !important;
  }

  .content-flex {
    display: flex;
    flex-direction: column;
    height: 100%;
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




  /* ✅ Heading properly visible */
  .title-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 3; /* ✅ show more title lines */
    -webkit-box-orient: vertical;
    overflow: hidden;

    line-height: 1.25;
    min-height: 72px; /* ✅ keeps equal height even if title is short */
    margin-bottom: 14px !important;
  }

  /* ✅ Description properly visible */
  .desc-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 4; /* ✅ show more description lines */
    -webkit-box-orient: vertical;
    overflow: hidden;

    line-height: 1.65;
    min-height: 110px; /* ✅ keeps equal height */
    margin-bottom: 16px !important;
  }

  .contact-line {
    font-size: 14px;
    margin-top: auto; /* pushes bottom link consistently */
    margin-bottom: 12px;
  }

  .client-link-bottom {
    font-size: 13px;
    text-decoration: underline;
    display: inline-block;
  }
  .client-link-bottom.muted {
    text-decoration: none;
    opacity: 0.7;
  }
`}</style>

            </div>
          </div>
        </div>

        <div className="hilite-title text-left p-l50 text-uppercase text-pop-up-top">
          <strong>Services</strong>
        </div>
      </div>
    </div>
  );
}

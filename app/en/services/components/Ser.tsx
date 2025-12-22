"use client";

import React, { useMemo, useState } from "react";
// ❌ remove useRouter if not used
// import { useRouter } from "next/navigation";

type Service = {
  id: number;
  img: string;
  title: string;
  desc: string;
  details: string[];
};

const services: Service[] = [
  {
    id: 1,
    img: "/images/plumbing.webp",
    title: "Plumbing",
    desc:
      "Installation, repair, and maintenance of plumbing lines, fittings, water tanks, and leak fixing with guaranteed workmanship.",
    details: [
      "New plumbing line installation (kitchen, bathrooms, outdoor).",
      "Leak detection & fixing with proper sealing.",
      "Water tank installation & maintenance.",
      "Fittings replacement (taps, valves, mixers, drains).",
      "Pressure and flow testing after work completion.",
    ],
  },
  {
    id: 2,
    img: "/images/painting.webp",
    title: "Wall & Roof Painting",
    desc:
      "Premium wall and roof painting using durable coatings for a clean finish, better protection, and long-lasting color.",
    details: [
      "Surface preparation (sanding, putty, crack filling).",
      "Primer + multiple coats for durable finish.",
      "Interior / exterior weather-resistant options.",
      "Color consultation & clean edging work.",
      "Final cleanup & touch-up included.",
    ],
  },
  {
    id: 3,
    img: "/images/electrician.avif",
    title: "Electrician",
    desc:
      "Safe electrical wiring, installations, troubleshooting, upgrades, and repairs handled by skilled technicians with guarantee.",
    details: [
      "Wiring and rewiring with safety standards.",
      "Switches, sockets, breakers installation/repair.",
      "Troubleshooting & load balancing.",
      "Lighting installation (indoor/outdoor).",
      "Safety checks: grounding & insulation testing.",
    ],
  },
  {
    id: 4,
    img: "/images/floor.avif",
    title: "Floor Tiling",
    desc:
      "Accurate floor tiling installation with clean leveling, strong bonding, and premium finishing for homes and commercial sites.",
    details: [
      "Floor leveling & base preparation.",
      "Tile layout planning for symmetrical finishing.",
      "Strong adhesive bonding + proper spacing.",
      "Grouting, polishing & final sealing.",
      "Repair/replace broken tiles.",
    ],
  },
  {
    id: 5,
    img: "/images/gypsum.avif",
    title: "Gypsum Board",
    desc:
      "Gypsum board ceiling and wall installation with neat joints, smooth finishing, and design options for modern interiors.",
    details: [
      "False ceiling designs (simple / modern).",
      "Partitions and wall cladding with proper framing.",
      "Neat joints + smooth putty finish.",
      "LED / spotlight cutouts alignment.",
      "Moisture-resistant options where needed.",
    ],
  },
  {
    id: 6,
    img: "/images/interiorD.avif",
    title: "Interior Designing",
    desc:
      "Complete interior design solutions including concept, materials, colors, and layout to match your space and style.",
    details: [
      "Concept + theme selection based on your taste.",
      "Material, color & lighting recommendations.",
      "Furniture placement & space optimization.",
      "Mood boards + design direction.",
      "Execution guidance for a clean final look.",
    ],
  },
  {
    id: 7,
    img: "/images/Layout.jpg",
    title: "Layout Planning",
    desc:
      "2D/3D layout planning to optimize space usage, flow, and functionality for renovations and new interior work.",
    details: [
      "2D plan for measurements & placement.",
      "3D visualization for better understanding.",
      "Space flow optimization (home/office).",
      "Renovation planning with practical layout.",
      "Revisions based on your feedback.",
    ],
  },
  {
    id: 8,
    img: "/images/CCTV.webp",
    title: "CCTV Camera Installation",
    desc:
      "CCTV installation with proper camera placement, wiring, NVR/DVR setup, and secure configuration for reliable monitoring.",
    details: [
      "Camera placement plan for best coverage.",
      "Wiring and clean cable routing.",
      "NVR/DVR setup with recording configuration.",
      "Mobile viewing setup + secure access.",
      "Testing + guidance for usage.",
    ],
  },
  {
    id: 9,
    img: "/images/welding.webp",
    title: "Welding Services",
    desc:
      "Professional welding for gates, grills, frames, and metal fabrication with strong joints and clean finishing.",
    details: [
      "Gate/grill fabrication and repair.",
      "Metal frames, stands & custom work.",
      "Strong joints + clean finishing polish.",
      "On-site welding for quick fixes.",
      "Rust prevention recommendations.",
    ],
  },
];

export default function Ser() {
  // ❌ remove router if not used
  // const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selected = useMemo<Service | undefined>(
    () => services.find((x) => x.id === selectedId),
    [selectedId]
  );

  // ✅ FIX: give type to parameter
  const openDialog = (service: Service) => {
    setSelectedId(service.id);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

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
                    className="service-card"
                    role="button"
                    tabIndex={0}
                    onClick={() => openDialog(s)}
                    onKeyDown={(e) => e.key === "Enter" && openDialog(s)}
                    aria-label={`Open ${s.title} details`}
                  >
                    <div className="card-inner bg-gray">
                      <div className="card-media">
                        <img src={s.img} alt={s.title} className="card-img" loading="lazy" />
                        <div className="media-overlay" />
                      </div>

                      <div className="card-content">
                        <h4 className="title-clamp">{s.title}</h4>
                        <p className="desc-clamp">{s.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {open && selected && (
                <div className="dialog-backdrop" onClick={closeDialog} role="presentation">
                  <div
                    className="dialog"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="serviceDialogTitle"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button className="dialog-close" onClick={closeDialog} aria-label="Close">
                      ✕
                    </button>

                    <div className="dialog-media">
                      <img src={selected.img} alt={selected.title} className="dialog-img" />
                    </div>

                    <div className="dialog-body">
                      <h3 id="serviceDialogTitle" className="dialog-title">
                        {selected.title}
                      </h3>

                      <p className="dialog-desc">{selected.desc}</p>

                      <div className="dialog-section">
                        <h4 className="dialog-subtitle">What we offer</h4>
                        <ul className="dialog-list">
                          {selected.details.map((d, idx) => (
                            <li key={idx}>{d}</li>
                          ))}
                        </ul>
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

                /* ✅ only change: increased image height */
                .card-media {
                  position: relative;
                  width: 100%;
                  height: 240px;
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

                .card-content {
                  padding: 22px 22px 26px 22px;
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }

                .title-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.25;
                  min-height: 52px;
                  margin-bottom: 12px;
                }

                .desc-clamp {
                  display: -webkit-box;
                  -webkit-line-clamp: 4;
                  -webkit-box-orient: vertical;
                  overflow: hidden;
                  line-height: 1.65;
                  opacity: 0.95;
                  margin: 0;
                }

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
                }

                @media (max-width: 900px) {
                  .dialog {
                    grid-template-columns: 1fr;
                  }
                }

                .dialog-close {
                  position: absolute;
                  top: 10px;
                  right: 10px;
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
                }

                .dialog-title {
                  margin: 0 0 10px 0;
                  font-size: 22px;
                  line-height: 1.2;
                }

                .dialog-desc {
                  margin: 0 0 14px 0;
                  line-height: 1.7;
                  opacity: 0.9;
                }

                .dialog-subtitle {
                  margin: 0 0 10px 0;
                  font-size: 16px;
                }

                .dialog-list {
                  margin: 0 0 16px 0;
                  padding-left: 18px;
                  line-height: 1.7;
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

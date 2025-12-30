"use client";

import { useState } from "react";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus({ loading: true, ok: null, msg: "" });
        try {
            // Replace with your API endpoint or email handler
            await new Promise((r) => setTimeout(r, 900));
            setStatus({ loading: false, ok: true, msg: "Message sent — thank you!" });
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            setStatus({ loading: false, ok: false, msg: "Something went wrong. Try again." });
        }
    }

    return (
        <main className="page">
            <section className="hero">
                <div className="hero-inner">
                    <h1>Get in touch</h1>
                    <p>We'd love to hear from you. Send a message and we'll get back shortly.</p>
                </div>
            </section>

            <section className="content">
                <div className="card">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                            <label className="field">
                                <span className="label">Name</span>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your full name"
                                />
                            </label>

                            <label className="field">
                                <span className="label">Email</span>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@company.com"
                                />
                            </label>
                        </div>

                        <label className="field">
                            <span className="label">Subject</span>
                            <input
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="What is this about?"
                            />
                        </label>

                        <label className="field">
                            <span className="label">Message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Write your message..."
                                rows="6"
                            />
                        </label>

                        <div className="actions">
                            <button className="btn" type="submit" disabled={status.loading}>
                                {status.loading ? "Sending..." : "Send Message"}
                            </button>
                            <div className={`status ${status.ok === false ? "err" : ""} ${status.ok ? "ok" : ""}`}>
                                {status.msg}
                            </div>
                        </div>
                    </form>

                    <aside className="info">
                        <div className="contact-block">
                            <h3>Contact Info</h3>
                            <p className="muted">Email</p>
                            <a href="mailto:hello@example.com" className="link">hello@example.com</a>

                            <p className="muted">Phone</p>
                            <a href="tel:+1234567890" className="link">+1 (234) 567-890</a>

                            <p className="muted">Address</p>
                            <address className="muted">123 Main St, Suite 400<br/>City, Country</address>
                        </div>

                        <div className="social">
                            <h4>Follow</h4>
                            <div className="icons">
                                <a aria-label="Twitter" href="#" className="icon">T</a>
                                <a aria-label="LinkedIn" href="#" className="icon">in</a>
                                <a aria-label="GitHub" href="#" className="icon">GH</a>
                            </div>
                        </div>

                        <div className="map">
                            <iframe
                                title="location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019693586218!2d-122.41941518468145!3d37.77492927975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c0f7c624f%3A0x9b2a8b6f6f0a8e1!2sMarket%20St%2C%20San%20Francisco!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                                loading="lazy"
                            />
                        </div>
                    </aside>
                </div>
            </section>

            <style jsx>{`
                :root{
                    --bg-1: #f5f7fb;
                    --bg-2: #eef2f7;
                    --card-bg: #ffffff;
                    --muted: #6b7280;
                    --accent: #06b6d4;
                    --accent-dark: #0891b2;
                    --input-border: #e6eef8;
                }

                .page{
                    min-height:100vh;
                    background: linear-gradient(180deg, var(--bg-1), var(--bg-2));
                    color:#0f172a;
                    font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
                    -webkit-font-smoothing:antialiased;
                    -moz-osx-font-smoothing:grayscale;
                    padding-bottom:60px;
                }

                .hero{
                    padding:64px 20px 28px;
                    text-align:center;
                }
                .hero-inner{
                    max-width:980px;
                    margin:0 auto;
                }
                h1{
                    margin:0;
                    font-size: clamp(1.6rem, 2.8vw, 2.6rem);
                    letter-spacing: -0.02em;
                    color: #0b2540;
                }
                .hero p{
                    margin-top:10px;
                    color: var(--muted);
                    font-size:1rem;
                }

                .content{
                    padding:28px 18px 80px;
                    max-width:1100px;
                    margin:0 auto;
                }

                .card{
                    display:grid;
                    gap:28px;
                    grid-template-columns: 1fr;
                    background: transparent;
                }

                /* the main elevated container */
                .card > .form,
                .card > .info {
                    background: var(--card-bg);
                    border-radius:14px;
                    padding:22px;
                    box-shadow: 0 10px 30px rgba(15,23,42,0.06);
                    border: 1px solid rgba(13,50,78,0.04);
                }

                /* layout for larger screens */
                @media (min-width:900px){
                    .card{
                        grid-template-columns: 1fr 380px;
                        align-items:start;
                    }
                    .card > .form { padding:28px; }
                    .card > .info { padding:28px; margin-left:8px; }
                }

                form{
                    padding:0;
                }

                .row{
                    display:flex;
                    gap:12px;
                }
                .field{
                    display:flex;
                    flex-direction:column;
                    margin-bottom:12px;
                }
                .field .label{
                    font-size:0.9rem;
                    margin-bottom:8px;
                    color:var(--muted);
                    font-weight:600;
                }
                input, textarea{
                    background: #fbfdff;
                    border: 1px solid var(--input-border);
                    padding:12px 14px;
                    border-radius:10px;
                    color: #0b2540;
                    outline: none;
                    transition: box-shadow .18s, transform .08s, border-color .12s;
                    font-size:0.95rem;
                    box-shadow: 0 2px 8px rgba(11,37,64,0.03);
                }
                input::placeholder, textarea::placeholder{ color: rgba(11,37,64,0.38); }

                input:focus, textarea:focus{
                    box-shadow: 0 8px 24px rgba(6,182,212,0.08);
                    border-color: rgba(6,182,212,0.85);
                    transform: translateY(-1px);
                }

                .actions{
                    display:flex;
                    gap:14px;
                    align-items:center;
                    margin-top:10px;
                    flex-wrap:wrap;
                }
                .btn{
                    background: linear-gradient(90deg, var(--accent), var(--accent-dark));
                    color:#ffffff;
                    padding:12px 18px;
                    border-radius:10px;
                    border: none;
                    font-weight:600;
                    cursor:pointer;
                    box-shadow: 0 10px 30px rgba(6,182,212,0.14);
                }
                .btn[disabled]{ opacity:0.7; cursor:default; }

                .status{ color:var(--muted); font-size:0.95rem; }
                .status.ok{ color:#10b981; }
                .status.err{ color:#ef4444; }

                aside.info{
                    padding:0; /* removed duplicate padding so inner block matches form height visually */
                }
                .contact-block{
                    padding:18px;
                }
                .contact-block h3{
                    margin:0 0 8px;
                    color:#0b2540;
                    font-size:1.4rem;
                }
                .muted{ color:var(--muted); font-size:0.95rem; margin:8px 0 4px; display:block; }
                .link{ color: var(--accent-dark); text-decoration:none; display:block; margin-bottom:8px; font-weight:600; }

                .social{
                    padding:0 18px 18px;
                }
                .social h4{ margin:0 0 8px; color:#0b2540; }
                .icons{ display:flex; gap:10px; margin-top:8px; }
                .icon{
                    width:44px; height:44px; display:inline-flex; align-items:center; justify-content:center;
                    background:#f3fafb; border-radius:10px; color:var(--muted); text-decoration:none;
                    font-weight:700; border:1px solid rgba(6,182,212,0.08);
                }

                .map{
                    padding:18px;
                }
                .map iframe{
                    width:100%;
                    height:160px;
                    border:0;
                    margin-top:6px;
                    border-radius:8px;
                    filter: grayscale(6%) contrast(96%);
                    box-shadow: 0 6px 20px rgba(11,37,64,0.06);
                }

                /* Responsive tweaks */
                @media (max-width:600px){
                    .row{ flex-direction:column; }
                    .map iframe{ height:200px; }
                    .card > .form, .card > .info { padding:16px; }
                }
            `}</style>
        </main>
    );
}
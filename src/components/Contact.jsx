import { useState } from "react";
import emailjs from "@emailjs/browser";
import { company } from "../data/content";
import Icon from "./Icons";

/* Same EmailJS account as the Apply Job form (service + public key are
   shared across every form on the site) but a DIFFERENT template — this
   form's fields (name/email/message) don't match the job-application
   template's fields (resume, experience, availability, etc.), so it needs
   its own template in the EmailJS dashboard. See VITE_EMAILJS_CONTACT_TEMPLATE_ID
   in .env. */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_CONTACT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (import.meta.env.DEV) {
  const missing = [
    !EMAILJS_SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
    !EMAILJS_CONTACT_TEMPLATE_ID && "VITE_EMAILJS_CONTACT_TEMPLATE_ID",
    !EMAILJS_PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
  ].filter(Boolean);

  if (missing.length) {
    console.warn(
      `[Contact] EmailJS env vars NOT loaded: ${missing.join(", ")}. ` +
        "Check .env is in the project root and restart `npm run dev`."
    );
  }
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_CONTACT_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error(
        "[Contact] EmailJS is not configured — check VITE_EMAILJS_SERVICE_ID / " +
          "VITE_EMAILJS_CONTACT_TEMPLATE_ID / VITE_EMAILJS_PUBLIC_KEY in .env"
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error(
          "[Contact] EmailJS send failed —",
          "status:", error?.status,
          "text:", error?.text,
          "raw error:", error
        );
        setStatus("error");
      });
  };

  return (
    <section className="section contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <span className="section-eyebrow section-eyebrow--light">Reach Us Directly</span>
          <h2>Call, email, or drop us a message</h2>
          <p>
            Our team typically responds within one business day. For urgent staffing or project
            needs, calling is the fastest way to reach us.
          </p>

          <div className="contact__details">
            <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="contact__detail">
              <Icon name="phone" size={20} />
              <span>{company.phone}</span>
            </a>
            <a href={`mailto:${company.email}`} className="contact__detail">
              <Icon name="mail" size={20} />
              <span>{company.email}</span>
            </a>
            <div className="contact__detail">
              <Icon name="mapPin" size={20} />
              <span>{company.hq} &middot; {company.branch}</span>
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" required />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="Tell us what you're looking for..." required />
          </label>
          <button type="submit" className="btn btn--primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}{" "}
            {status !== "sending" && <Icon name="arrowRight" size={18} />}
          </button>
          {status === "sent" && (
            <p className="apply-form__status apply-form__status--ok">
              Thanks — your message has been sent. We'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="apply-form__status apply-form__status--error">
              Something went wrong sending your message. Please try again, or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

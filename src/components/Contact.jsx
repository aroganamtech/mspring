import { useState } from "react";
import { company } from "../data/content";
import Icon from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Website enquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
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
          <button type="submit" className="btn btn--primary">
            Send Message <Icon name="arrowRight" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}

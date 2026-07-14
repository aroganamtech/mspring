import { useState } from "react";
import { company } from "../data/content";
import Icon from "./Icons";
import PageHeader from "./PageHeader";

export default function CVForm({ content, parent, current }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", role: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`CV Submission — ${form.role || "General Application"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nRole interested in: ${form.role}\n\nMessage:\n${form.message}\n\n(Please remember to attach your resume/CV before sending this email.)`
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <PageHeader
        eyebrow={parent ? parent.label : content.eyebrow}
        eyebrowPath={parent?.path}
        breadcrumbCurrent={parent ? current : undefined}
        title={content.title}
        description={content.description}
      />

      <section className="section contact">
        <div className="container contact__inner">
          <div className="contact__info">
            <span className="section-eyebrow section-eyebrow--light">How It Works</span>
            <h2>Send your CV, we'll take it from there</h2>
            <p>
              Fill in the form and we'll open your email client with the details pre-filled —
              just attach your resume before hitting send. Our recruitment team reviews every
              application against current and upcoming client requirements.
            </p>

            <div className="contact__details">
              <a href={`mailto:${company.email}`} className="contact__detail">
                <Icon name="mail" size={20} />
                <span>{company.email}</span>
              </a>
              <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="contact__detail">
                <Icon name="phone" size={20} />
                <span>{company.phone}</span>
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Full Name
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" />
            </label>
            <label>
              Role You're Interested In
              <input type="text" name="role" value={form.role} onChange={handleChange} placeholder="e.g. DevOps Engineer, Recruiter" />
            </label>
            <label>
              Message
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="A little about your experience..." />
            </label>
            <button type="submit" className="btn btn--primary">
              Continue to Email <Icon name="arrowRight" size={18} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

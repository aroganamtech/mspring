import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CLIENTS } from "../data/clients";
import { usePageTitle } from "../router";
import { saveJobApplication } from "../utils/cookies";

/* EmailJS credentials — set in .env (VITE_ prefix required by Vite).
   Service ID / Template ID come from the EmailJS dashboard; the Public Key
   is safe to expose client-side (it's not a secret key). */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// One-time startup diagnostic: logs exactly which EmailJS env vars Vite
// actually picked up, so a missing/misnamed/misplaced .env file is obvious
// from the browser console instead of a generic "not configured" error.
if (import.meta.env.DEV) {
  const missing = [
    !EMAILJS_SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
    !EMAILJS_TEMPLATE_ID && "VITE_EMAILJS_TEMPLATE_ID",
    !EMAILJS_PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
  ].filter(Boolean);

  if (missing.length) {
    console.warn(
      `[ApplyJobPage] EmailJS env vars NOT loaded: ${missing.join(", ")}. ` +
        "This means Vite didn't find a .env file with these keys in the project root " +
        "(same folder as package.json) — or the dev server was started before the " +
        ".env file was created/saved. Fix the file, then fully stop and restart " +
        "`npm run dev` (Vite only reads .env at startup, not on hot-reload)."
    );
  } else {
    console.log(
      "[ApplyJobPage] EmailJS env vars loaded OK — service:",
      EMAILJS_SERVICE_ID,
      "template:",
      EMAILJS_TEMPLATE_ID,
      "publicKey:",
      EMAILJS_PUBLIC_KEY ? `${EMAILJS_PUBLIC_KEY.slice(0, 4)}…` : EMAILJS_PUBLIC_KEY
    );
  }
}

/* Job-post age filters shown in the left rail (matches the reference layout). */
const JOB_FILTERS = [
  "Immediate",
  "Today",
  "Yesterday",
  "Last 2 Days",
  "Last 3 Days",
  "Last Week",
  "Last Month",
];

/* Client tiles come from the shared list in src/data/clients.js —
   the same 24 clients (and logo files) as the home-page logo wall. */

const YEARS = Array.from({ length: 31 }, (_, i) => i); // 0–30 years
const MONTHS = Array.from({ length: 12 }, (_, i) => i); // 0–11 months

const EMPTY_FORM = {
  fullName: "",
  title: "",
  mobile: "",
  email: "",
  skills: "",
  expYear: "",
  expMonth: "0",
  message: "",
};

function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

export default function ApplyJobPage() {
  usePageTitle("Apply for a Job");

  const [activeFilter, setActiveFilter] = useState("Immediate");
  const [form, setForm] = useState(EMPTY_FORM);
  const [fileName, setFileName] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const formRef = useRef(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setFileName(e.target.files?.[0]?.name || "");
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const missing = [
        !EMAILJS_SERVICE_ID && "VITE_EMAILJS_SERVICE_ID",
        !EMAILJS_TEMPLATE_ID && "VITE_EMAILJS_TEMPLATE_ID",
        !EMAILJS_PUBLIC_KEY && "VITE_EMAILJS_PUBLIC_KEY",
      ].filter(Boolean);
      console.error(
        `[ApplyJobPage] EmailJS is not configured — missing from .env: ${missing.join(", ")}. ` +
          "Check the .env file is in the project root and restart `npm run dev`."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    const templateParams = {
      fullName: form.fullName,
      title: form.title || "Not specified",
      mobile: form.mobile,
      email: form.email,
      skills: form.skills || "Not specified",
      expYear: form.expYear || "0",
      expMonth: form.expMonth || "0",
      message: form.message || "—",
      availability: activeFilter,
      resume_name: fileName || "No resume attached",
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        saveJobApplication({ ...form, availability: activeFilter, resumeName: fileName });
        setStatus("sent");
        setForm(EMPTY_FORM);
        setFileName("");
        setActiveFilter("Immediate");
        e.target.reset();
      })
      .catch((error) => {
        // Log every detail EmailJS gives us — status code + message when the
        // API responded (e.g. bad service/template ID, over the free-plan
        // limit), or the raw error when the request couldn't reach EmailJS
        // at all (network/CORS/ad-blocker issues).
        console.error(
          "[ApplyJobPage] EmailJS send failed —",
          "status:", error?.status,
          "text:", error?.text,
          "raw error:", error
        );
        setStatus("error");
      });
  };

  return (
    <section className="apply-page">
      <div className="apply-page__inner">
        {/* ---------- Left rail: job filters ---------- */}
        <aside className="apply-page__filters">
          <h3 className="apply-page__heading">Job Filters</h3>
          <ul className="apply-filters__list">
            {JOB_FILTERS.map((filter) => (
              <li key={filter}>
                <button
                  type="button"
                  className={`apply-filters__item ${
                    activeFilter === filter ? "apply-filters__item--active" : ""
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  <ClockIcon />
                  {filter}
                </button>
              </li>
            ))}
          </ul>
          <button type="button" className="apply-page__submit-resume" onClick={scrollToForm}>
            Submit Resume
          </button>
        </aside>

        {/* ---------- Center: personal information form ---------- */}
        <div className="apply-page__form-col" ref={formRef}>
          <h3 className="apply-page__heading">Personal Information</h3>
          <form className="apply-form" onSubmit={handleSubmit}>
            <label className="apply-form__field">
              Full Name
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="First & Last Name"
                required
              />
            </label>

            <label className="apply-form__field">
              Title / Designations
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Title / position"
              />
            </label>

            <label className="apply-form__field">
              Mobile Number
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                placeholder="Ex:9880000001"
                required
              />
            </label>

            <label className="apply-form__field">
              Email Id
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@domain.com"
                required
              />
            </label>

            <label className="apply-form__field">
              Skills
              <textarea
                name="skills"
                rows="4"
                value={form.skills}
                onChange={handleChange}
                placeholder="Ex: HTML, CSS, JAVASCRIPT..."
              />
            </label>

            <div className="apply-form__field">
              Experience
              <div className="apply-form__experience">
                <select name="expYear" value={form.expYear} onChange={handleChange}>
                  <option value="">Select Year</option>
                  {YEARS.map((y) => (
                    <option key={y} value={y}>
                      {y} Year{y === 1 ? "" : "s"}
                    </option>
                  ))}
                </select>
                <select name="expMonth" value={form.expMonth} onChange={handleChange}>
                  {MONTHS.map((m) => (
                    <option key={m} value={m}>
                      {m} Month{m === 1 ? "" : "s"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <label className="apply-form__field">
              Message
              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
              />
            </label>

            <label className="apply-form__field">
              Attach The Resume
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx,.rtf,.txt"
                onChange={handleFileChange}
                className="apply-form__file"
                required
              />
            </label>

            <div className="apply-form__actions">
              <button type="submit" className="apply-form__send" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send"}
              </button>
              {status === "sent" && (
                <p className="apply-form__status apply-form__status--ok">
                  Thanks! Your application has been sent — we'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="apply-form__status apply-form__status--error">
                  Something went wrong sending your application. Please try again, or email us directly.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* ---------- Right rail: clients ---------- */}
        <aside className="apply-page__clients">
          <h3 className="apply-page__heading">Our Clients</h3>
          <div className="apply-clients__grid">
            {CLIENTS.map((client) => (
              <div className="apply-clients__tile" key={client.slug} title={client.name}>
                {client.logo ? (
                  <img src={client.logo} alt={client.name} className="apply-clients__logo" />
                ) : (
                  <span className="apply-clients__fallback apply-clients__fallback--visible">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

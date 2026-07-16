import Clients from "../components/Clients";
import Icon from "../components/Icons";
import { Link, usePageTitle } from "../router";

import badge14 from "../assets/badge-14-years.jpg";
import expCloud from "../assets/exp-cloud.png";
import expCyber from "../assets/exp-cyber.png";
import expAi from "../assets/exp-ai.png";
import expEngineering from "../assets/exp-engineering.png";
import expApplications from "../assets/exp-applications.png";
import expDesign from "../assets/exp-design.png";
import ctaConnect from "../assets/cta-connect.jpg";
import ctaMspring from "../assets/cta-mspring.jpg";

const expertise = [
  { title: "Cloud Solution", path: "/cloud", icon: expCloud, theme: "indigo" },
  { title: "Cyber Security", path: "/cyber-security", icon: expCyber, theme: "green" },
  { title: "AI & Data", path: "/ai-data", icon: expAi, theme: "crimson" },
  { title: "Engineering", path: "/cloud/devops", icon: expEngineering, theme: "red" },
  { title: "Applications", path: "/erp", icon: expApplications, theme: "blue" },
  { title: "Design Services", path: "/ai-data/automation", icon: expDesign, theme: "graphite" },
];

const industryTiles = [
  { label: "Telecom & Media", path: "/industries/telecom", icon: "globe" },
  { label: "Banking & Financial", path: "/industries/bfsi", icon: "briefcase" },
  { label: "Healthcare", path: "/industries/healthcare", icon: "checkCircle" },
  { label: "Retail & E-Commerce", path: "/industries/retail", icon: "target" },
  { label: "Manufacturing", path: "/industries/manufacturing", icon: "settings" },
  { label: "Public Sector", path: "/industries/public-sector", icon: "fileCheck" },
  { label: "Automotive", path: "/industries/automotive", icon: "compass" },
  { label: "Oil, Gas & Energy", path: "/industries/oil-gas-energy", icon: "layers" },
];

export default function Home() {
  usePageTitle(null);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hm-hero">
        <span className="hm-hero__arc" aria-hidden="true" />
        <div className="container hm-hero__inner">
          <h1>Accelerate the CHANGE</h1>
          <p className="hm-hero__sub">From legacy to modern business models</p>

          <div className="hm-hero__arrows" aria-hidden="true">
            <svg viewBox="0 0 120 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4c10 0 22 5 22 18S14 40 4 40c8-8 10-12 10-18S12 12 4 4Z" fill="#a4b048" />
              <path d="M40 4c10 0 22 5 22 18S50 40 40 40c8-8 10-12 10-18S48 12 40 4Z" fill="#a4b048" />
              <path d="M78 6l30 16-30 16V6Z" fill="#a4b048" />
            </svg>
          </div>

          <div className="hm-hero__footer">
            <p className="hm-hero__lede">
              Drive agility, boost competitiveness and enhance operational efficiency through....
            </p>
            <Link to="/about" className="hm-hero__btn">
              Learn More <Icon name="arrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Expertise ---------- */}
      <section className="section hm-expertise">
        <div className="container">
          <div className="hm-expertise__head">
            <h2>Expertise</h2>
            <p>
              Our business drives long-term customer success through six specialized areas &ndash;
              delivering measurable impact in technology, talent and digital transformation.
            </p>
          </div>
          <div className="hm-expertise__grid">
            {expertise.map((e) => (
              <Link
                to={e.path}
                className={`hm-exp-card hm-exp-card--${e.theme}`}
                key={e.title}
              >
                <h3>{e.title}</h3>
                <span className="hm-exp-card__rule" aria-hidden="true" />
                <p>
                  Robust Software,
                  <br />
                  Seamless Integration
                </p>
                <div className="hm-exp-card__icon">
                  <img src={e.icon} alt="" />
                </div>
                <span className="hm-exp-card__more">+ Find out more</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 13 Years Experience ---------- */}
      <section className="section hm-experience">
        <div className="container hm-experience__inner">
          <div className="hm-experience__badge">
            <img src={badge14} alt="14 years of experience" />
          </div>
          <div className="hm-experience__copy">
            <p>
              As your partner in <span>digital and technology transformation</span>, we
              democratize access to state-of-the-art technologies, <span>enabling businesses</span>{" "}
              of all sizes to leverage digital innovation for sustained growth and success.
            </p>
            <div className="hm-experience__stats">
              <div>
                <strong>14</strong>
                <span>Years of experience</span>
              </div>
              <div>
                <strong>70+</strong>
                <span>Clients</span>
              </div>
              <div>
                <strong>60+</strong>
                <span>Our Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Our Clienteles logo wall ---------- */}
      <Clients />

      {/* ---------- Industries (dark) ---------- */}
      <section className="section hm-industries">
        <div className="container">
          <h2>
            Serving our clients across
            <br />
            the diverse industries.
          </h2>
          <div className="hm-industries__grid">
            {industryTiles.map((t) => (
              <Link to={t.path} className="hm-industry-tile" key={t.label}>
                <span className="hm-industry-tile__icon">
                  <Icon name={t.icon} size={26} />
                </span>
                <span>{t.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Bottom CTA cards ---------- */}
      <section className="section hm-ctas">
        <div className="container hm-ctas__inner">
          <Link to="/contact" className="hm-cta-card hm-cta-card--wide" aria-label="Let's connect">
            <img src={ctaConnect} alt="Serving our clients across the diverse industries — let's connect" />
          </Link>
          <Link to="/careers/submit-cv" className="hm-cta-card" aria-label="Be an Mspring — submit your CV">
            <img src={ctaMspring} alt="Be an Mspring — submit your CV" />
          </Link>
        </div>
      </section>
    </>
  );
}

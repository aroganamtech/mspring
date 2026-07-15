import Clients from "../components/Clients";
import Icon from "../components/Icons";
import { Link, usePageTitle } from "../router";

import badge13 from "../assets/badge-13-years.jpg";
import expCloud from "../assets/exp-cloud.png";
import expCyber from "../assets/exp-cyber.png";
import expAi from "../assets/exp-ai.png";
import expEngineering from "../assets/exp-engineering.png";
import expApplications from "../assets/exp-applications.png";
import expDesign from "../assets/exp-design.png";
import caseBulb from "../assets/case-bulb.jpg";
import caseNetsuite from "../assets/case-netsuite.jpg";
import insightAiHealthcare from "../assets/insight-ai-healthcare.jpg";
import insightEcommerce from "../assets/insight-ecommerce.jpg";
import insightAiRoi from "../assets/insight-ai-roi.jpg";
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

const caseStudies = [
  {
    title: "Driving Sales with Seamless Payment Integration on Shopify",
    path: "/industries/retail",
    image: caseBulb,
    style: "photo",
  },
  {
    title: "Custom warehouse management system on NetSuite improves inventory management",
    path: "/erp",
    image: caseNetsuite,
    style: "panel",
  },
  {
    title: "AWS Cloud for the streamlining school accreditation process",
    path: "/cloud",
    image: caseBulb,
    style: "photo",
  },
];

const insights = [
  {
    title: "Scaling AI Strategies in Healthcare Success",
    snippet:
      "Scaling AI in healthcare transforms patient care. Discover strategies for success and learn how AI drives innovation!",
    path: "/industries/healthcare",
    image: insightAiHealthcare,
  },
  {
    title: "Is Your eCommerce Platform Slowing Down Your Growth?",
    snippet:
      "Whether you're frustrated with day-to-day inefficiencies or planning for long-term scale, this guide will give you the clarity you need to move forward.",
    path: "/industries/retail",
    image: insightEcommerce,
  },
  {
    title: "Maximizing AI's Impact: Implementation Strategies & ROI in Healthcare",
    snippet:
      "Download this whitepaper to gain a clear understanding of AI's potential in healthcare.",
    path: "/ai-data/ai-ml",
    image: insightAiRoi,
  },
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
            <img src={badge13} alt="13 years of experience" />
          </div>
          <div className="hm-experience__copy">
            <p>
              As your partner in <span>digital and technology transformation</span>, we
              democratize access to state-of-the-art technologies, <span>enabling businesses</span>{" "}
              of all sizes to leverage digital innovation for sustained growth and success.
            </p>
            <div className="hm-experience__stats">
              <div>
                <strong>13</strong>
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

      {/* ---------- Benefits / Case studies ---------- */}
      <section className="section hm-benefits">
        <div className="container">
          <h2 className="hm-benefits__head">Benefits Delivered to the Customers</h2>
          <div className="hm-benefits__grid">
            {caseStudies.map((c) => (
              <Link
                to={c.path}
                className={`hm-case-card hm-case-card--${c.style}`}
                key={c.title}
              >
                {c.style === "photo" ? (
                  <>
                    <img src={c.image} alt="" className="hm-case-card__bg" />
                    <span className="hm-case-card__pill">Click here</span>
                    <span className="hm-case-card__plate">{c.title}</span>
                  </>
                ) : (
                  <>
                    <span className="hm-case-card__pill hm-case-card__pill--dark">
                      Click here
                    </span>
                    <span className="hm-case-card__paneltitle">{c.title}</span>
                    <img src={c.image} alt="" className="hm-case-card__panelimg" />
                  </>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Trending Insights ---------- */}
      <section className="section hm-insights">
        <div className="container">
          <h2 className="hm-insights__head">Trending Insights</h2>
          {insights.map((ins, i) => (
            <div key={ins.title}>
              {i > 0 && <hr className="hm-insights__rule" />}
              <div className="hm-insight">
                <img src={ins.image} alt="" className="hm-insight__thumb" />
                <h3 className="hm-insight__title">{ins.title}</h3>
                <div className="hm-insight__body">
                  <p>{ins.snippet}</p>
                  <Link to={ins.path} className="hm-insight__link">
                    Read the blog
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

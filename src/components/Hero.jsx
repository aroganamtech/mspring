import { heroStats } from "../data/content";
import Icon from "./Icons";
import { Link } from "../router";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__rings" aria-hidden="true">
        <span className="ring ring--1" />
        <span className="ring ring--2" />
        <span className="ring ring--3" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="eyebrow">
            <Icon name="sparkle" size={16} /> IT Solutions &middot; Digital Transformation &middot; IT Staffing
          </span>
          <h1>
            Changing Levels in <span className="text-gradient">Technology</span> &amp; Talent
          </h1>
          <p className="hero__lede">
            Innovating IT solutions and digital transformation services for business growth,
            brand visibility, and ROI maximization — backed by 12+ years of trusted IT staffing
            and recruitment expertise, delivered PAN India.
          </p>
          <div className="hero__actions">
            <Link to="/cloud" className="btn btn--primary">
              Explore Services <Icon name="arrowRight" size={18} />
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Talk to Us
            </Link>
          </div>
        </div>

        <div className="hero__panel">
          <div className="hero__panel-glow" aria-hidden="true" />
          <p className="hero__panel-title">Mspring at a glance</p>
          <div className="hero__stats">
            {heroStats.map((s) => (
              <div className="hero__stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__panel-footer">
            <Icon name="shield" size={18} />
            <span>ISO 27001 Certified &middot; Since 2019</span>
          </div>
        </div>
      </div>
    </section>
  );
}

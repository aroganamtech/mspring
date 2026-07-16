import Icon from "./Icons";
import { Link } from "../router";

import bgOpenings from "../assets/careers-cards/openings.svg";
import bgLife from "../assets/careers-cards/life-at-mspring.svg";
import bgSubmitCv from "../assets/careers-cards/submit-cv.svg";

// Photo-card service grid for the /careers hub page only — same dark
// showcase treatment as /cloud, /ai-data and /erp (see HubPage.jsx's
// hasPhotoShowcase flag). Intentionally scoped so it never renders on the
// other hub pages, which keep using the plain HubPage text-link grid.
const careersServices = [
  {
    icon: "briefcase",
    title: "Current Openings",
    text: "We're growing across engineering, delivery and staffing functions — see what's open right now.",
    path: "/careers/openings",
    bg: bgOpenings,
  },
  {
    icon: "users",
    title: "Life at Mspring",
    text: "A close-knit, delivery-focused team spanning Bangalore and Chennai, with real investment in upskilling.",
    path: "/careers/life-at-mspring",
    bg: bgLife,
  },
  {
    icon: "fileCheck",
    title: "Submit Your CV",
    text: "Don't see the right listing? Send us your CV directly — we review every submission against upcoming roles.",
    path: "/careers/submit-cv",
    bg: bgSubmitCv,
  },
];

export default function CareersServicesShowcase() {
  return (
    <section className="cloud-showcase careers-showcase">
      <div className="container">
        <div className="section-head cloud-showcase__head">
          <span className="section-eyebrow section-eyebrow--light">Careers</span>
          <h2>Explore Opportunities at Mspring</h2>
          <p className="section-lede">
            Whichever path fits you best — a current opening, learning what it's like to work
            here, or just getting your CV in front of us — start here.
          </p>
        </div>

        <div className="cloud-showcase__grid careers-showcase__grid">
          {careersServices.map((s) => (
            <Link
              to={s.path}
              className="cloud-showcase-card"
              key={s.title}
              style={{ backgroundImage: `url("${s.bg}")` }}
            >
              <span className="cloud-showcase-card__overlay" aria-hidden="true" />
              <div className="cloud-showcase-card__icon">
                <Icon name={s.icon} size={24} />
              </div>
              <div className="cloud-showcase-card__body">
                <h3>{s.title}</h3>
                <p className="cloud-showcase-card__text">{s.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

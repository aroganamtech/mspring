import { clientSectors, industries, roleCategories } from "../data/content";
import Icon from "./Icons";
import { Link } from "../router";

// Dark photo-card backgrounds — same visual language as the /cloud and
// /ai-data showcase grids (dark navy base, radial accent glow, ghost icon
// motif). Generated per industry / role category; see
// /tmp/gen_showcase_bgs.py for how these were produced.
import bgTelecom from "../assets/industry-cards/telecom.svg";
import bgBfsi from "../assets/industry-cards/bfsi.svg";
import bgAutomotive from "../assets/industry-cards/automotive.svg";
import bgPublicSector from "../assets/industry-cards/public-sector.svg";
import bgRetail from "../assets/industry-cards/retail.svg";
import bgHealthcare from "../assets/industry-cards/healthcare.svg";
import bgOilGasEnergy from "../assets/industry-cards/oil-gas-energy.svg";
import bgManufacturing from "../assets/industry-cards/manufacturing.svg";

const INDUSTRY_IMAGES = {
  telecom: bgTelecom,
  bfsi: bgBfsi,
  automotive: bgAutomotive,
  "public-sector": bgPublicSector,
  retail: bgRetail,
  healthcare: bgHealthcare,
  "oil-gas-energy": bgOilGasEnergy,
  manufacturing: bgManufacturing,
};

import bgCloudDevopsData from "../assets/role-cards/cloud-devops-data.svg";
import bgSoftwareEngineering from "../assets/role-cards/software-engineering.svg";
import bgAiDataScience from "../assets/role-cards/ai-data-science.svg";
import bgMlAutomation from "../assets/role-cards/ml-automation.svg";
import bgSecurityCompliance from "../assets/role-cards/security-compliance.svg";
import bgEnterpriseErp from "../assets/role-cards/enterprise-erp.svg";
import bgCorporateSupport from "../assets/role-cards/corporate-support.svg";

const ROLE_IMAGES = {
  "cloud-devops-data": bgCloudDevopsData,
  "software-engineering": bgSoftwareEngineering,
  "ai-data-science": bgAiDataScience,
  "ml-automation": bgMlAutomation,
  "security-compliance": bgSecurityCompliance,
  "enterprise-erp": bgEnterpriseErp,
  "corporate-support": bgCorporateSupport,
};

export default function Industries() {
  return (
    <section id="industries" className="section industries industries--dark">
      <div className="container">
        <div className="section-head cloud-showcase__head">
          <span className="section-eyebrow section-eyebrow--light">Industry Portfolio</span>
          <h2>Delivering tailored technology solutions across sectors</h2>
        </div>

        <div className="cloud-showcase__grid industries__grid">
          {industries.map((ind) => {
            const slug = ind.path.split("/").pop();
            const bg = INDUSTRY_IMAGES[slug];
            return (
              <Link
                to={ind.path}
                className="cloud-showcase-card"
                key={ind.title}
                style={bg ? { backgroundImage: `url("${bg}")` } : undefined}
              >
                <span className="cloud-showcase-card__overlay" aria-hidden="true" />
                <div className="cloud-showcase-card__icon">
                  <Icon name={ind.icon || "compass"} size={24} />
                </div>
                <div className="cloud-showcase-card__body">
                  <h3>{ind.title}</h3>
                  <div className="cloud-showcase-card__text">
                    <p>{ind.description}</p>
                    <span className="industry-card__link industry-card__link--dark">
                      Learn more <Icon name="arrowRight" size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="client-sectors client-sectors--dark">
          <span className="client-sectors__label">Our clients also span:</span>
          <div className="client-sectors__tags">
            {clientSectors.map((sector) => (
              <span className="chip chip--outline chip--outline-dark" key={sector}>
                {sector}
              </span>
            ))}
          </div>
        </div>

        <div className="roles">
          <div className="section-head section-head--compact cloud-showcase__head">
            <span className="section-eyebrow section-eyebrow--light">Roles We Staff</span>
            <h3>Deep bench strength across technology &amp; business functions</h3>
          </div>
          <div className="cloud-showcase__grid roles__grid">
            {roleCategories.map((cat) => {
              const bg = ROLE_IMAGES[cat.image];
              return (
                <div
                  className="cloud-showcase-card cloud-showcase-card--static"
                  key={cat.title}
                  style={bg ? { backgroundImage: `url("${bg}")` } : undefined}
                >
                  <span className="cloud-showcase-card__overlay" aria-hidden="true" />
                  <div className="cloud-showcase-card__icon">
                    <Icon name={cat.icon || "users"} size={24} />
                  </div>
                  <div className="cloud-showcase-card__body">
                    <h3>{cat.title}</h3>
                    <div className="role-card__chips role-card__chips--dark">
                      {cat.roles.map((role) => (
                        <span className="chip chip--dark" key={role}>
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

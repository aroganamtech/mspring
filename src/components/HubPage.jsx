import CTASection from "./CTASection";
import Icon from "./Icons";
import PageHeader from "./PageHeader";
import { Link } from "../router";

export default function HubPage({ content, path, children: menuChildren }) {
  const hubSlug = path ? path.replace(/^\//, "").replace(/\//g, "-") : "";

  return (
    <>
      <PageHeader
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        ctaLabel={content.ctaLabel}
        ctaPath={content.ctaPath}
      />

      <section className={`section hub ${hubSlug ? `hub--${hubSlug}` : ""}`}>
        <div className="container">
          {content.intro && <p className="hub__intro">{content.intro}</p>}

          <div className="hub__grid">
            {menuChildren.map((child) => (
              <Link to={child.path} className="hub-card" key={child.path}>
                <div className="hub-card__icon">
                  <Icon name="arrowRight" size={20} />
                </div>
                <h3>{child.label}</h3>
                <span className="hub-card__link">
                  View details <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

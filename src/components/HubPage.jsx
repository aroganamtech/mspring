import AIDataServicesShowcase from "./AIDataServicesShowcase";
import CloudServicesShowcase from "./CloudServicesShowcase";
import CTASection from "./CTASection";
import ERPServicesShowcase from "./ERPServicesShowcase";
import Icon from "./Icons";
import PageHeader from "./PageHeader";
import { Link } from "../router";

export default function HubPage({ content, path, children: menuChildren }) {
  const hubSlug = path ? path.replace(/^\//, "").replace(/\//g, "-") : "";
  const isCloudHub = path === "/cloud";
  const isAiDataHub = path === "/ai-data";
  const isErpHub = path === "/erp";
  const hasPhotoShowcase = isCloudHub || isAiDataHub || isErpHub;

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

          {/* Cloud, AI & Data and ERP get a dedicated photo-card showcase
              instead of the plain text-link grid used by the other hubs. */}
          {!hasPhotoShowcase && (
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
          )}
        </div>
      </section>

      {isCloudHub && <CloudServicesShowcase />}
      {isAiDataHub && <AIDataServicesShowcase />}
      {isErpHub && <ERPServicesShowcase />}

      <CTASection />
    </>
  );
}

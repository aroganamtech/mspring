import "./DetailPage.css";
import CTASection from "./CTASection";
import Icon from "./Icons";
import PageHeader from "./PageHeader";
import { Link } from "../router";

export default function DetailPage({ content, parent, current }) {
  return (
    <>
      <PageHeader
        eyebrow={parent ? parent.label : content.eyebrow}
        eyebrowPath={parent?.path}
        breadcrumbCurrent={parent ? current : undefined}
        title={content.title}
        description={content.description}
      />

      {content.about && (
        <section className="section detail-about">
          <div className="container">
            <div className="detail-about__top">
              <div className="detail-about__intro">
                <span className="detail-about__eyebrow">{content.about.eyebrow}</span>
                <h2>{content.about.heading}</h2>
              </div>
              <img
                className="detail-about__photo"
                src={content.about.image}
                alt={content.about.imageAlt || ""}
              />
            </div>
            <hr className="detail-about__divider" />
            <div className="detail-about__text">
              {content.about.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.why && (
        <section className="section detail-why">
          <div className="container">
            <span className="detail-about__eyebrow">{content.why.eyebrow}</span>
            <h2 className="detail-why__heading">{content.why.heading}</h2>

            {content.why.features && (
              <>
                <h4 className="detail-why__features-label">{content.why.featuresLabel}</h4>
                <div className="detail-why__features">
                  {content.why.features.map((feature) => (
                    <div className="detail-why__feature" key={feature}>
                      <Icon name="checkCircle" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {content.why.valueColumns && (
              <div className="detail-why__values">
                {content.why.valueColumns.map((col) => (
                  <div className="detail-why__col" key={col.title}>
                    <h5 className="detail-why__col-title">{col.title}</h5>
                    {col.items.map((item) => (
                      <div className="detail-why__cell" key={item}>
                        {item}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section detail">
        <div className="container detail__inner">
          <div className="detail__body">
            {content.body?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {content.table && (
              <div className="detail__table-wrap">
                <table className="detail__table">
                  <thead>
                    <tr>
                      {content.table.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.table.rows.map((row, i) => (
                      <tr key={i}>
                        {row.map((cell, j) => (
                          <td key={j}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {content.clients && content.clients.length > 0 && (
              <div className="detail__clients">
                <span className="detail__clients-label">Clients we've supported in this space:</span>
                <div className="detail__clients-tags">
                  {content.clients.map((c) => (
                    <span className="chip chip--outline" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {content.ctaLabel && content.ctaPath && (
              <Link to={content.ctaPath} className="btn btn--primary">
                {content.ctaLabel} <Icon name="arrowRight" size={18} />
              </Link>
            )}
          </div>

          <aside className="detail__aside">
            {content.badgeImage && (
              <div className="detail__panel detail__panel--badge">
                <img
                  src={content.badgeImage}
                  alt={
                    content.badgeImageAlt ||
                    "Security certifications: AES 256-bit SSL Secured, ISO 27001 Certified"
                  }
                />
              </div>
            )}

            {content.complianceBadge && (
              <div className="detail__panel detail__panel--badge">
                <img
                  src={content.complianceBadge}
                  alt={content.complianceBadgeAlt || "HIPAA and GDPR compliance badges"}
                />
              </div>
            )}

            {content.verificationBadge && content.verificationBadgeUrl && (
              <div className="detail__panel detail__panel--badge">
                <a
                  href={content.verificationBadgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={content.verificationBadgeAlt || "View verified company profile"}
                >
                  <img src={content.verificationBadge} alt={content.verificationBadgeAlt || ""} />
                </a>
              </div>
            )}

            {content.highlights && (
              <div className="detail__panel">
                <h4>What We Deliver</h4>
                <ul>
                  {content.highlights.map((h) => (
                    <li key={h}>
                      <Icon name="checkCircle" size={18} />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.tags && (
              <div className="detail__panel">
                <h4>Related Technologies</h4>
                <div className="detail__tags">
                  {content.tags.map((t) => (
                    <span className="chip" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}

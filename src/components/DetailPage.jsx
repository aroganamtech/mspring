import "./DetailPage.css";
import { useState } from "react";
import CTASection from "./CTASection";
import Icon from "./Icons";
import PageHeader from "./PageHeader";
import { JOBS } from "../data/jobs";
import { setPendingJobTitle } from "../utils/cookies";
import { Link } from "../router";

// Accordion used by the optional "deliver" section — one item open at a
// time; when there are several items the second starts open (matching the
// reference layout this section was built from).
function DeliverAccordion({ items, defaultOpen }) {
  const [openIndex, setOpenIndex] = useState(
    typeof defaultOpen === "number" ? defaultOpen : items.length > 1 ? 1 : 0
  );

  return (
    <div className="detail-deliver__accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.title}
            className={`detail-deliver__item ${open ? "detail-deliver__item--open" : ""}`}
          >
            <button
              type="button"
              className="detail-deliver__item-head"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              <span>{item.title}</span>
              <Icon name="chevronDown" size={16} />
            </button>
            {open && (
              <div className="detail-deliver__item-body">
                {item.intro && <p>{item.intro}</p>}
                {item.bullets && (
                  <ul>
                    {item.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
                {item.outro && <p>{item.outro}</p>}
                {item.ctaLabel && item.ctaPath && (
                  <Link to={item.ctaPath} className="btn btn--primary detail-deliver__cta">
                    {item.ctaLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function DetailPage({ content, parent, current, path }) {
  // Optional per-page hook for page-specific styling overrides (mirrors
  // HubPage's hubSlug) — pages that don't need it are unaffected since
  // no CSS currently targets a `detail--*` class other than the ones
  // explicitly opted into.
  const detailSlug = path ? path.replace(/^\//, "").replace(/\//g, "-") : "";

  // The classic two-column body (paragraphs + "What We Deliver" aside) only
  // renders when the page actually defines any of its content — pages built
  // entirely from the optional sections (about / why / deliver) skip it.
  const hasDetailBody =
    (content.body && content.body.length > 0) ||
    (content.clients && content.clients.length > 0) ||
    content.highlights ||
    content.tags ||
    content.badgeImage ||
    content.complianceBadge ||
    content.verificationBadge ||
    (content.complianceStrip && content.complianceStrip.length > 0) ||
    (content.ctaLabel && content.ctaPath);

  return (
    <>
      <PageHeader
        eyebrow={parent ? parent.label : content.eyebrow}
        eyebrowPath={parent?.path}
        breadcrumbCurrent={parent ? current : undefined}
        title={content.title}
        description={content.description}
        ctaLabel={content.headerCtaLabel}
      />

      {content.heroImage && (
        <img
          className="detail-hero-photo"
          src={content.heroImage}
          alt={content.heroImageAlt || ""}
        />
      )}

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

      {content.features && (
        <section className="section detail-features">
          <div className="container">
            {content.features.map((feature) => (
              <div className="detail-feature" key={feature.titleBold + feature.titleLight}>
                <div className="detail-feature__text">
                  <h2 className="detail-feature__title">
                    <strong>{feature.titleBold}</strong>
                    {feature.titleLight && <span>{feature.titleLight}</span>}
                  </h2>
                  {(feature.paragraphs || [feature.text]).map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                <img
                  className="detail-feature__img"
                  src={feature.image}
                  alt={feature.imageAlt || ""}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {content.serviceCards && (
        <section className="section detail-service-cards">
          <div className="container">
            <h2 className="detail-service-cards__heading">{content.serviceCards.heading}</h2>
            <p className="detail-service-cards__lede">{content.serviceCards.text}</p>
          </div>
          <div className="detail-service-cards__band">
            <div className="container detail-service-cards__grid">
              {content.serviceCards.cards.map((card) => (
                <div className="detail-service-cards__card" key={card.title}>
                  <h3>{card.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.bands && (
        <section className="section detail-bands">
          <div className="container">
            <h2 className="detail-bands__heading">{content.bands.heading}</h2>
            <p className="detail-bands__lede">{content.bands.text}</p>
            {content.bands.items.map((item) => (
              <div className="detail-bands__item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {content.markets && (
        <section className="section detail-markets">
          <div className="container detail-markets__inner">
            <h3 className="detail-markets__heading">{content.markets.heading}</h3>
            <ul className="detail-markets__list">
              {content.markets.countries.map((country) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {(Array.isArray(content.deliver) ? content.deliver : content.deliver ? [content.deliver] : []).map(
        (block) => (
          <section className="section detail-deliver" key={block.heading}>
            <div className="container detail-deliver__inner">
              <img
                className="detail-deliver__photo"
                src={block.image}
                alt={block.imageAlt || ""}
              />
              <div className="detail-deliver__content">
                <span className="detail-about__eyebrow">{block.eyebrow}</span>
                <h2 className="detail-deliver__heading">{block.heading}</h2>
                <DeliverAccordion items={block.items} defaultOpen={block.defaultOpen} />
              </div>
            </div>
          </section>
        )
      )}

      {content.partner && (
        <section
          className={`section detail-partner ${
            content.partner.align === "left" ? "detail-partner--left" : ""
          }`}
        >
          <div className="container">
            <h2 className="detail-partner__heading">{content.partner.heading}</h2>
            <p className="detail-partner__lede">{content.partner.text}</p>
            <div className="detail-partner__cards">
              {content.partner.cards.map((card) => (
                <div className="detail-partner__card" key={card.title}>
                  <h3>{card.title}</h3>
                  {card.icon && <Icon name={card.icon} size={34} />}
                  <p>{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {hasDetailBody && (
      <section className={`section detail ${detailSlug ? `detail--${detailSlug}` : ""}`}>
        <div className="container detail__inner">
          <div className="detail__body">
            {content.body?.map((para, i) => (
              <p key={i}>{para}</p>
            ))}

            {content.bodyImage && (
              <img
                className="detail-body-image"
                src={content.bodyImage}
                alt={content.bodyImageAlt || ""}
              />
            )}

            {content.bodyImages && content.bodyImages.length > 0 && (
              <div className="detail-body-images">
                {content.bodyImages.map((img, i) => (
                  <img key={img.alt || i} src={img.image} alt={img.alt || ""} />
                ))}
              </div>
            )}

            {content.complianceStrip && content.complianceStrip.length > 0 && (
              <div className="detail-compliance-strip">
                {content.complianceStrip.map((badge) => {
                  const Tag = badge.url ? "a" : "div";
                  const linkProps = badge.url
                    ? { href: badge.url, target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Tag className="detail-compliance-strip__item" key={badge.alt} {...linkProps}>
                      <img src={badge.image} alt={badge.alt} />
                      {badge.caption && (
                        <span className="detail-compliance-strip__caption">{badge.caption}</span>
                      )}
                    </Tag>
                  );
                })}
              </div>
            )}

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
            {content.certBadges && (
              <div className="detail__panel detail__panel--certs">
                <div className="detail__certs">
                  {content.certBadges.map((badge) => (
                    <div className="detail__cert" key={badge.alt}>
                      <img src={badge.image} alt={badge.alt} />
                    </div>
                  ))}
                </div>
              </div>
            )}

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
      )}

      {content.showOpenings && (
        <section className="section detail-openings">
          <div className="container">
            <div className="section-head section-head--compact">
              <span className="section-eyebrow">Open Roles</span>
              <h3>Current Openings ({JOBS.length} roles)</h3>
            </div>
            <div className="detail-openings__list">
              {JOBS.map((job, i) => (
                <article className="detail-openings__card" key={job.role}>
                  <div className="detail-openings__top">
                    <span className="detail-openings__num">{i + 1}</span>
                    <h4 className="detail-openings__role">{job.role}</h4>
                    <span className="detail-openings__exp">{job.experience}</span>
                  </div>
                  <p className="detail-openings__desc">{job.description}</p>
                  <dl className="detail-openings__meta">
                    <div>
                      <dt>Role-Specific Skills</dt>
                      <dd>{job.roleSkills}</dd>
                    </div>
                    <div>
                      <dt>Common Skills</dt>
                      <dd>{job.commonSkills}</dd>
                    </div>
                    <div>
                      <dt>Preferred Locations</dt>
                      <dd>{job.locations}</dd>
                    </div>
                  </dl>
                  <Link
                    to="/careers/apply"
                    className="btn btn--primary detail-openings__apply"
                    onClick={() => setPendingJobTitle(job.role)}
                  >
                    Apply for this role <Icon name="arrowRight" size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {content.gallery && content.gallery.length > 0 && (
        <section className="section detail-gallery">
          <div className="container detail-gallery__grid">
            {content.gallery.map((img, i) => (
              <div className="detail-gallery__item" key={img.alt || i}>
                <img src={img.image} alt={img.alt || ""} />
              </div>
            ))}
          </div>
          {content.galleryText && content.galleryText.length > 0 && (
            <div className="container detail-gallery__text">
              {content.galleryText.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </section>
      )}

      <CTASection />
    </>
  );
}
